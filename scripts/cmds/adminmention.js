module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "Mehedi Hassan",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "fun"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["61581500445402", "61581500445402", "61581974807041"].map(String);
    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      "কি রে! আবার বসকে মেনশন করছিস? 😡",
      "রাগ হচ্ছে তোর এতো সাহস দেখে! 😤",
      "বস এখন রেগে আগুন, তোর জন্য অপেক্ষা করছে 🔥",
      "মেনশন দিছস আর তুই ভাবছোস chill? 😠",
      "আরেকবার মেনশন করলে বস সরাসরি ব্লক দিবে! ⚡",
      "তুই কি ভাবছোস বস তোর জন্য time waste করবে? 😾",
      "এত সাহস! আবার বসকে disturb করছিস? 😤",
      "মেনশন দিয়া লাভ নাই, বস তো এখন রেগে আছে 😡",
      "রাগে বস বলছে—\"এই আবালটা আবার কে?\" 😠",
      "তুই যদি এবারও মেনশন দিস, তোরে ইনবক্সে মারামারি দেখাবে 😤",
      "বসের রাগ control করার power নেই এখন! 😡🔥",
      "তোর সাহস দেখে বসের মাথা explode হতে পারে 💥😠",
      "আরেকবার disturb করলে বস সরাসরি Ignore করবে 😤",
      "এই সাহস তো limits cross করছে 😾",
      "বস এখন thinking mode-এ, তোর জন্য গালি ready 😡",
      "তোর attention খোরি behavior এখন boss কে irritate করছে 😠",
      "কি রে! আবার কে disturb করল বসকে? 😡",
      "বস এখন rage mode-এ, তুই safe না 😤",
      "তুই কি ভাবছোস এভাবে মেনশন করলে মজা পাবে? 😾",
      "বস তো এখন angry, তোর জন্য অপেক্ষা করছে 🔥",
      "তুই যদি আবার disturb করিস, তোর block time শুরু 😤",
      "বসের patience শেষ, আরেকবার মেনশন দিস না 😡",
      "এইতো দেখি, আবার সাহস দেখাচ্ছিস 😠",
      "তুই সাহসী, কিন্তু Boss বেশি রাগী 😠",
      "আরেকবার disturbance মানে full attention মারামারি 😤",
      "বস এখন thinking, তুই quiet থাক 😡",
      "এইতো দেখি আবার attention খোর behavior 😠",
      "তুই কি জানিস Boss এখন mood full angry 😡",
      "তুই সাহস দেখাস, Boss এখন furious 😤",
      "আরেকবার disturb করলে Inbox Fire 😡🔥",
      "Boss এখন rage full, stay away 😤",
      "তুই কি ভাবছোস Boss calm থাকবে? 😡",
      "আরেকবার মেনশন মানে inbox chaos 😠",
      "মেসেজ দিলে Boss explosion 😡💥",
      "তুই আবার disturb করছিস? 😠 Boss furious!",
      "Boss এখন thinking mode, তোর life danger 😤",
      "মেনশন করলে Boss Fire ignite 😡🔥",
      "তুই attention খোর, Boss furious 😠",
      "আরেকবার disturbance মানে Inbox Heat 😤",
      "Boss ready, তুই panic 😡",
      "তুই কি জানিস Boss anger limit cross 😠",
      "তুই আবার disturb করলে Boss furious 😡🔥",
      "Boss এখন thinking, তুই beware 😠"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
