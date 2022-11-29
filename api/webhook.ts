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

  console.log(body);

  const { id } = body.project;

  const installationResult = await db.collection('installations').where(id, "!=", "").get();

  console.log(installationResult)

  const installation = installationResult.docs[0]

  if(installation.exists == false) {
    res.status(401).end('Not authorised');
  }

  res.status(200).end('ok')
}