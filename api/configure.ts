import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as serviceGateway from '../lib/vercel/gateway/index';
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

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  console.log(body, query, method, url, headers);

  const { configurationId } = query;

  // Installations. Access Tokens etc.
  const installationRef = await db.collection('installations').doc(<string>configurationId);
  const installation = await installationRef.get();
  if (installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  const installationData = installation.data();

  // Configuration. What should we do with the webhook.
  const configurationRef = await db.collection('configuration').doc(<string>configurationId);

  const configuration = await configurationRef.get();

  if (configuration.exists == false) {
    configurationRef.set({
      configurationId
    })
  }

  const vercelAPI = new Vercel({ authorization: installationData.accessToken })

  // Get a list of projects
  const projects = await vercelAPI.projects({
    teamId: installationData.installation_id
  });

  console.log(projects);

  const result =
    res.status(200).end(`<html>
  <head>
    <title>Configure Webhook</title>
  </head>
  <body>
  <h1>Configure</h1>
  ${projects}
  </body>
</html>`)
}