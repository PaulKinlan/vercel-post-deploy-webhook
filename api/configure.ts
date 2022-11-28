import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
    const { body, query, method, url, headers } = req;

    console.log(req);
    console.log(body, query, method, url, headers);
    res.status(200).end(`
<html>
  <head>
    <title>Configure Webhook</title>
  </head>
  <body>
  <h1></h1>
  </body>
</html>`)
}