import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';
import { Vercel } from '../lib/vercelApi';


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });
}

const db = admin.firestore();

async function post(req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  // Installations. Access Tokens etc.
  const configuration_id = query.configurationId;
  console.log(body)

  const installationRef = await db.collection('installations').doc(<string>configuration_id);
  const installation = await installationRef.get();
  if (installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  const installationData = installation.data();
  const team_id = installationData.team_id;
  const access_token = installationData.access_token;
  const installation_id = installationData.installation_id;

  // Configuration. What should we do with the webhook.
  const configurationRef = await db.collection('configuration').doc(<string>installation_id);

  const configuration = await configurationRef.get();

  if (configuration.exists == false) {
    configurationRef.set({
      installation_id
    })
  } else {
    configurationRef.set({
      installation_id
    })
  }

  const vercelAPI = new Vercel({ authorization: access_token })

  // Get a list of projects
  const projects = await vercelAPI.projects({
    teamId: team_id
  });

  return { projects, installation_id, team_id };
}

async function get(req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  // Installations. Access Tokens etc.
  const configuration_id = query.configurationId;

  const installationRef = await db.collection('installations').doc(<string>configuration_id);
  const installation = await installationRef.get();
  if (installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  const installationData = installation.data();
  const team_id = installationData.team_id;
  const access_token = installationData.access_token;
  const installation_id = installationData.installation_id;

  // Configuration. What should we do with the webhook.
  const configurationRef = await db.collection('configuration').doc(<string>installation_id);

  const configuration = await configurationRef.get();

  if (configuration.exists == false) {
    configurationRef.set({
      installation_id
    })
  }

  const vercelAPI = new Vercel({ authorization: access_token })

  // Get a list of projects
  const projects = await vercelAPI.projects({
    teamId: team_id
  });

  console.log(projects)

  return { projects, installation_id, team_id };
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  let projects, installation_id, team_id;

  if (method == "POST") {
    ({ projects, installation_id, team_id } = await post(req, res))
  }
  else if (method == "GET") {
    ({ projects, installation_id, team_id } = await get(req, res))
  }
  else {
    return res.status(404).end(":(")
  }

  const result =
    res.status(200).end(`<html>
  <head>
    <title>Configure Webhook</title>
  </head>
  <body>
  <h1>Configure</h1>
  <form method="post" action="/configure">
  ${projects.map(project => {
      return `
    <label for="${project.id}>${project.name}</label>
    <input type="url" name="${project.id}">`
    }).join('')}

    <input type="hidden" value="${installation_id}" name="configurationId">
    <input type="hidden" value="${team_id}" name="teamId">
    <input type="submit">
  </form>
  </body>
</html>`)
}