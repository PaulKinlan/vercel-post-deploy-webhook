import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
    const { body, query, method, url, headers } = req;

    console.log(req)
}