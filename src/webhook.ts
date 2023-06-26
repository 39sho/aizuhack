import { Client, TextMessage, WebhookEvent } from "@line/bot-sdk";

import text from './text';

const {
    CHANNEL_ACCESS_TOKEN,
    CHANNEL_SECRET,
} = process.env;

const config = {
    channelAccessToken: CHANNEL_ACCESS_TOKEN ?? '',
    channelSecret: CHANNEL_SECRET ?? '',
};

const client = new Client(config);

export default async (event: WebhookEvent) => {
    if (event.type === 'message') {
        if (event.message.type === 'text') {
            const response: TextMessage = {
                type: 'text',
                text: text(event.message.text),
            };

            client.replyMessage(event.replyToken, response);
        }
    }
};