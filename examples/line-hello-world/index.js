const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const bot = new LineBot({
  channelSecret: 'c1843fd0381fb0fa8c64035fb6d3470e',
  accessToken: '7sYKfRYhRZNsJoK3Uwxjx0DlAvssKg+O9I9Wy5y+nOF+nwclOY1Alg50iZh4m1QoQkzQuKFY4vRFKCKY8S7mbfeuX7p+Y/uzuPWb4Ws4IY8Se90YI51w42iVp+8VCLzBdH05mHFhnLwVz2S+GfPrfAdB04t89/1O/w1cDnyilFU=',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
{
  "replyToken": "0f3779fba3b349968c5d07db31eabf65",
  "type": "memberJoined",
  "timestamp": 1462629479859,
  "source": {
    "type": "group",
    "groupId": "C4af4980629..."
  },
  "joined": {
    "members": [
      {
       "type": "user",
        "userId": "U4af4980629..."
      },
      {
        "type": "user",
        "userId": "U91eeaf62d9..."
      }
    ]
  }
}
