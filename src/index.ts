import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const youtube = google.youtube({
  version: "v3",
  auth: process.env.GOOGLE_AUTH_TOKEN,
});

youtube.search
  .list({
    q: "名取さな",
    part: "snippet",
  })
  .then((value) => {
    console.log(value.data.items);
  });

// forUsernameではダメ
// youtube.channels.list({ part: "snippet", forUsername: "戌神ころね" }).then((value) => {
//   console.log(value.data.items);
// });

youtube.search
  .list({
    q: "Korone Ch. 戌神ころね",
    part: "snippet",
    type: "channel",
  })
  .then((value) => {
    console.log(value.data.items);
  });
// channel ID = "UChAnqc_AY5_I3Px5dig3X1Q" # channelページのURLと同じ

youtube.search
  .list({
    channelId: "UChAnqc_AY5_I3Px5dig3X1Q",
    part: "snippet",
    type: "video",
    q: "夜勤事件",
  })
  .then((value) => {
    console.log(value.data.items);
  });
// video ID = "0DT6nxSc55I" # 共有リンクのIDと同じ

youtube.videos
  .list({
    part: "liveStreamingDetails",
    id: "0DT6nxSc55I",
  })
  .then((value) => {
    console.log(value.data.items);
  });
// 放送終了後はactiveLiveChatIdとれない=チャット履歴取れない
