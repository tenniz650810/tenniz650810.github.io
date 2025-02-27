const chances = [
    { text: "前進 3 格！🚀", img: "images/chance1.jpg" },
    { text: "獲得 500 元！💰", img: "images/chance2.jpg" },
    { text: "繳稅 200 元 😢", img: "images/chance3.jpg" },
    { text: "免費停車一回合 🚗", img: "images/chance4.jpg" },
    { text: "倒退 2 格 🔙", img: "images/chance5.jpg" },
    { text: "銀行贈送 300 元 🏦", img: "images/chance6.jpg" },
    { text: "抽到神秘禮物 🎁", img: "images/chance7.jpg" },
    { text: "再擲一次骰子 🎲", img: "images/chance8.jpg" },
    { text: "投資成功，獲利 700 元！📈", img: "images/chance9.jpg" },
    { text: "遇到小偷，損失 100 元 😱", img: "images/chance10.jpg" },
    { text: "免費獲得一間房屋 🏠", img: "images/chance11.jpg" },
    { text: "被罰款 150 元 ⚖️", img: "images/chance12.jpg" },
    { text: "搭捷運前進 5 格 🚇", img: "images/chance13.jpg" },
    { text: "意外發現寶藏 +1000 元！🏆", img: "images/chance14.jpg" },
    { text: "股票崩盤，損失 500 元 📉", img: "images/chance15.jpg" },
    { text: "送好友 200 元 🎁", img: "images/chance16.jpg" },
    { text: "中樂透 +1500 元 🎉", img: "images/chance17.jpg" },
    { text: "社會福利，免費抽一次機會卡！😊", img: "images/chance18.jpg" },
    { text: "被罰停車費 250 元 🚔", img: "images/chance19.jpg" },
    { text: "免費獲得一張地產卡 🏡", img: "images/chance20.jpg" }
];

// 翻轉卡片並顯示隨機機會
function flipCard() {
    let card = document.getElementById("chance-card");
    let content = document.getElementById("chance-content");
    let imgElement = document.getElementById("chance-img");
    let textElement = document.getElementById("chance-text");

    // 隨機抽一張機會卡
    let randomChance = chances[Math.floor(Math.random() * chances.length)];

    // 設定卡片內容
    imgElement.src = randomChance.img; // 📌 確保 images/ 內有這些圖片
    textElement.textContent = randomChance.text;

    // 翻轉動畫
    card.classList.toggle("flip");
}
