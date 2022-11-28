import type { VercelRequest, VercelResponse } from '@vercel/node';

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
  console.log(req);

  const userCollectRef = await db.collection('users');;

  const result = await fetch('https://api.vercel.com/v2/oauth/access_token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: qs.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.query.code,
      redirect_uri: `${process.env.HOST}/callback` // this parameter should match the Redirect URL in your integration settings on Vercel
    })
  })

  const body = await result.json()

  // This one apps config.
  userCollectRef.doc().set(body)

  console.log('https://api.vercel.com/v2/oauth/access_token returned:', JSON.stringify(body, null, '  '))

  res.status(200).json(body)
}
