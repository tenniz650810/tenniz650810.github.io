// 定義機會卡池（請把對應的圖片放到 images/ 資料夾）
const chanceCards = [
    { name: "前進三步！", img: "images/chance1.jpg" },  // 圖片放在 images/ 資料夾
    { name: "獲得獎金 200 元！", img: "images/chance2.jpg" },
    { name: "繳納稅金 100 元！", img: "images/chance3.jpg" },
    { name: "免費停車一次！", img: "images/chance4.jpg" },
    { name: "回到起點！", img: "images/chance5.jpg" },
    { name: "獲得銀行紅利 500 元！", img: "images/chance6.jpg" }
];

// 抽取機會卡（一次只能抽一張）
function drawChanceCard() {
    let card = chanceCards[Math.floor(Math.random() * chanceCards.length)]; // 隨機選擇一張卡片

    // 顯示抽卡結果
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="card">
            <img src="${card.img}" alt="${card.name}">
            <p>${card.name}</p>
        </div>
    `;
}
