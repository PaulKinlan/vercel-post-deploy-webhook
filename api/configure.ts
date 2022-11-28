import type { VercelRequest, VercelResponse } from '@vercel/node';
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

const db = admin.firestore();

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body, query, method, url, headers } = req;
  console.log(body, query, method, url, headers);

  const { installation_id } = query;

  if (method == 'POST') {

  }

  const installationRef = await db.collection('installations').doc(installation_id[0]);

  const installation = await installationRef.get();

  if(installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  const result =
    res.status(200).end(`<html>
  <head>
    <title>Configure Webhook</title>
  </head>
  <body>
  <h1>Configure</h1>
  
  </body>
</html>`)
}