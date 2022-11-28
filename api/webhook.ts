import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';


export default async function (req: VercelRequest, res: VercelResponse) {
    const { body, query, method, url, headers } = req;

    console.log(body);

    //Log the deployment
    const userCollectRef = await db.collection('installations');

    



    res.status(200).end('ok')
}