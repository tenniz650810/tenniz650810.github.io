const chances = [
    { text: "💪+0 🎭+1", img: "images/chance1.Jpg" },
    { text: "💪+0 🎭+2", img: "images/chance2.Jpg" },
    { text: "💪+0 🎭+3", img: "images/chance3.Jpg" },
    { text: "💪+0 🎭+4", img: "images/chance4.Jpg" },
    { text: "💪+0 🎭+5", img: "images/chance5.Jpg" },
    { text: "💪+0 🎭+6", img: "images/chance6.Jpg" },
    { text: "💪+0 🎭+7", img: "images/chance7.Jpg" },
    { text: "💪+0 🎭+8", img: "images/chance8.Jpg" },
    { text: "💪+0 🎭+9", img: "images/chance9.Jpg" },
    { text: "💪+1 🎭+0", img: "images/chance10.Jpg" },
    { text: "💪+1 🎭+1", img: "images/chance11.Jpg" },
    { text: "💪+1 🎭+2", img: "images/chance12.Jpg" },
    { text: "💪+1 🎭+3", img: "images/chance13.Jpg" },
    { text: "💪+1 🎭+4", img: "images/chance14.Jpg" },
    { text: "💪+1 🎭+5", img: "images/chance15.Jpg" },
    { text: "💪+1 🎭+6", img: "images/chance16.Jpg" },
    { text: "💪+1 🎭+7", img: "images/chance17.Jpg" },
    { text: "💪+1 🎭+8", img: "images/chance18.Jpg" },
    { text: "💪+1 🎭+9", img: "images/chance19.Jpg" },
    { text: "💪+2 🎭+0", img: "images/chance20.Jpg" }
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

