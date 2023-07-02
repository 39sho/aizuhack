import 'dotenv/config';
import express, { response } from 'express';
import { WebhookEvent, middleware } from '@line/bot-sdk';

import webhook from './webhook';
import getMenu from './getMenu';

const {
    CHANNEL_ACCESS_TOKEN,
    CHANNEL_SECRET,
} = process.env;

const config = {
    channelAccessToken: CHANNEL_ACCESS_TOKEN ?? '',
    channelSecret: CHANNEL_SECRET ?? '',
};

const app = express();

app.post('/webhook', middleware(config), async (req, res) => {
    const events: WebhookEvent[] = req.body.events;

    await Promise.all(events.map(async (event: WebhookEvent) => {
        console.log(event);

        webhook(event);
    }));
    res.end();
});

app.listen(3000);