const chances = [
    { text: "💪+0 🎭+1", img: "images/chance1.jpg" },
    { text: "💪+0 🎭+2", img: "images/chance2.jpg" },
    { text: "💪+0 🎭+3", img: "images/chance3.jpg" },
    { text: "💪+0 🎭+4", img: "images/chance4.jpg" },
    { text: "💪+0 🎭+5", img: "images/chance5.jpg" },
    { text: "💪+0 🎭+6", img: "images/chance6.jpg" },
    { text: "💪+0 🎭+7", img: "images/chance7.jpg" },
    { text: "💪+0 🎭+8", img: "images/chance8.jpg" },
    { text: "💪+0 🎭+9", img: "images/chance9.jpg" },
    { text: "💪+1 🎭+0", img: "images/chance10.jpg" },
    { text: "💪+1 🎭+1", img: "images/chance11.jpg" },
    { text: "💪+1 🎭+2", img: "images/chance12.jpg" },
    { text: "💪+1 🎭+3", img: "images/chance13.jpg" },
    { text: "💪+1 🎭+4", img: "images/chance14.jpg" },
    { text: "💪+1 🎭+5", img: "images/chance15.jpg" },
    { text: "💪+1 🎭+6", img: "images/chance16.jpg" },
    { text: "💪+1 🎭+7", img: "images/chance17.jpg" },
    { text: "💪+1 🎭+8", img: "images/chance18.jpg" },
    { text: "💪+1 🎭+9", img: "images/chance19.jpg" },
    { text: "💪+2 🎭+0", img: "images/chance20.jpg" }
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

