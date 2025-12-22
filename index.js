import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

(async () => {
  try {
    // 🧠 List caption
    const captions = [
      'BA only mutualan yuk?? #zonauang',
      'Mutualan yuu BA #zonauang',
      'ba marie mutualan, rep spess janlup fb #zonauang',
      'ba asli yu mutualan, ternak gausah dl #zonauang',
      'moots yu ba, like / rep aja, janlup folbekk #zonauang'
    ];

    // 🎲 Ambil caption random
    const randomCaption =
      captions[Math.floor(Math.random() * captions.length)];

    // 🐦 Kirim tweet (TEXT ONLY)
    const tweet = await client.v2.tweet({
      text: randomCaption,
    });

    console.log('✅ Tweet terkirim:', randomCaption);
  } catch (error) {
    console.error('❌ Gagal kirim tweet:', error);
  }
})();

