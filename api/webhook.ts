import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body, headers, query } = req;

  console.log(query);
  console.log(headers);
  console.log(body);

  const { id } = body.payload.project;
  const team_id = body.payload.team.id;

  if (body.type != "deployment.succeeded") {
    console.log("incorrect web hook event", body.type);
    return res.status(404).end("incorrect event");
  }

  console.log(body.meta);

  const configurationResult = await db
    .collection("configuration")
    .where("team_id", "==", team_id)
    .get();

  console.log(configurationResult);

  const configuration = configurationResult.docs[0];
  const configurationData = configuration.data();

  if (configuration.exists == false || (id in configurationData == false)) {
    console.log("configuration doesn't exist");
    res.status(401).end("Not authorised");
  }

  // Now we can forward the request.
  await fetch(configurationData[id], {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body.payload),
  });

  res.status(200).end("ok");
}
