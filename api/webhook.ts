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
  const { body } = req;
  const { id } = body.payload.project;
  const team_id = body.payload.team.id;

  if (body.type != "deployment.succeeded") {
    console.log("Incorrect web hook event", body.type);
    return res.status(404).end("Incorrect event");
  }

  const configurationResult = await db
    .collection("configuration")
    .where("team_id", "==", team_id)
    .get();

  if (configurationResult.empty) {
    console.log("Configuration doesn't exist - empty");
    res.status(401).end("Not authorised");
  }

  const configurationRef = configurationResult.docs[0];
  const configurationData = configurationRef.data();

  if (configurationRef.exists == false || id in configurationData == false) {
    console.log("Configuration doesn't exist");
    res.status(401).end("Not authorised");
  }

  console.log("Sending message to", configurationData[id])
  // Now we can forward the request.
  const hookResponse = await fetch(configurationData[id], {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body.payload),
  });

  console.log(await hookResponse.text());

  res.status(200).end("ok");
}
