# Vercel Post Deploy Web Hook

This is a simple Vercel Integration that will let you configure custom webhooks for deployment related events for each of your projects.

Once installed you can add it to your organisation or projects in Vercel and then configure a webhook endpoint of your choice that will be called with a `HTTP POST`.

It is not published in the Vercel Integration Marketplace and I don't intend to launch it as a product. It should be a feature of the platform (ihmo).

## Why?

Vercel doesn't offer the ability for a project to configure a webhook for any of the project related events that happen (such as Deploy Successful). Integrations can register for these, so I needed to build an Integration.

This project can serve as inspiration for building your own should you need to automate anything one once a project is deployed.

## Set up

1. You need to use Firebase Firestore to store the configuration.
2. You need to deploy this integration on Vercel
3. You need to set up a Marketplace entry so that you can add it to your projects
4. You need to configure the webhooks that you want to handle.