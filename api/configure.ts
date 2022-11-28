import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as serviceGateway from '../lib/vercel/gateway/index';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });
}

// Global for the current installation;
let installationData;

serviceGateway.init({
  getAuthorization // Add a `getAuthorization` handler for when a request requires auth credentials
});
 
// The param 'security' represents the security definition in your OpenAPI spec a request is requiring
// For bearer type it has two properties:
// 1. id - the name of the security definition from your OpenAPI spec
// 2. scopes - the token scope(s) required
// Should return a promise
function getAuthorization(security) {
  console.log(security);
  switch (security.id) {
    case 'bearerToken': return Promise.resolve({ token: installationData?.access_token});
    case 'account': return Promise.resolve({ token: installationData?.access_token});
    // case 'api_key': return getApiKey(security); // Or any other securityDefinitions from your OpenAPI spec
    default: throw new Error(`Unknown security type '${security.id}'`)
  }
};
 
const db = admin.firestore();

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  console.log(body, query, method, url, headers);

  const { configurationId } = query;

  // Installations. Access Tokens etc.
  const installationRef = await db.collection('installations').doc(<string>configurationId);
  const installation = await installationRef.get();
  if(installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  installationData = installation.data();

  // Configuration. What should we do with the webhook.
  const configurationRef = await db.collection('configuration').doc(<string>configurationId);

  const configuration = await configurationRef.get();

  if (configuration.exists == false) {
    configurationRef.set({
      configurationId
    })
  } 
  
  // Get a list of projects
  const projects = await serviceGateway.getProjects({
    teamId: installationData['installation_id'],
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