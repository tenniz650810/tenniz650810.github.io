const chances = [
    { text: "📚+3	🚀+3", img: "images/chance1.jpg" },
    { text: "🎭+3	🏆+2", img: "images/chance2.jpg" },
    { text: "📚+2	🏆+3", img: "images/chance3.jpg" },
    { text: "📚+2	🏆+3", img: "images/chance4.jpg" },
    { text: "📚+2	🏆+3", img: "images/chance5.jpg" },
    { text: "📚+2	🏆+3", img: "images/chance6.jpg" },
    { text: "📚+3	🚀+3", img: "images/chance7.jpg" },
    { text: "💪+3	🚀+3", img: "images/chance8.jpg" },
    { text: "🏆+3	🚀+2", img: "images/chance9.jpg" },
    { text: "🏆+3	🚀+2", img: "images/chance10.jpg" },
    { text: "🏆+2	🚀+3", img: "images/chance11.jpg" },
    { text: "💪+3	🏆+2", img: "images/chance12.jpg" },
    { text: "🎭+3	🏆+2", img: "images/chance13.jpg" },
    { text: "📚+3	🏆+2", img: "images/chance14.jpg" },
    { text: "📚+2	🚀+3", img: "images/chance15.jpg" },
    { text: "📚+3	🚀+3", img: "images/chance16.jpg" },
    { text: "📚+3	🚀+3", img: "images/chance17.jpg" },
    { text: "📚+3	🏆+2", img: "images/chance18.jpg" },
    { text: "💪+3	🚀+3", img: "images/chance19.jpg" },
    { text: "🏆+3	🚀+2", img: "images/chance20.jpg" }
];

// 翻轉卡片並顯示隨機機會
function flipCard() {
    let card = document.getElementById("chance-card");
    let content = document.getElementById("chance-content");
    let imgElement = document.getElementById("chance-img");
    let textElement = document.getElementById("chance-text");

    // 隨機抽一張機會卡
    let randomChance = chances[Math.floor(Math.random() * chances.length)];

    // 翻轉動畫
    card.classList.toggle("flip");

    // 設定延遲時間（例如，延遲1秒，1000毫秒）
    const delay = 300; // 1秒

    // 使用 setTimeout 延遲設置圖片和文本
    setTimeout(() => {
        imgElement.src = randomChance.img; // 📌 確保 images/ 內有這些圖片
        textElement.textContent = randomChance.text;
    }, delay);
}

// 擲骰子動畫
function rollDice() {
    let dice = document.getElementById("dice");

    if (!dice) {
        console.error("❌ 找不到骰子元素！");
        return;
    }

    let diceValue = Math.floor(Math.random() * 6) + 1;
    let rotations = {
        1: "rotateX(0deg) rotateY(0deg)",  
        2: "rotateX(0deg) rotateY(-90deg)", 
        3: "rotateX(0deg) rotateY(-180deg)", 
        4: "rotateX(0deg) rotateY(90deg)",  
        5: "rotateX(-90deg) rotateY(0deg)", 
        6: "rotateX(90deg) rotateY(0deg)"  
    };
    // Shorten initial rotation time to 0.3 seconds
    dice.style.transition = "transform 0.3s ease-in-out"; 
    dice.style.transform = `rotateX(${360 * 5}deg) rotateY(${360 * 5}deg)`; 

    setTimeout(() => {
        // Shorten final transition time to 0.5 seconds
        dice.style.transition = "transform 0.5s ease-out"; 
        dice.style.transform = rotations[diceValue];
    }, 1000); // Reduced time to 1000ms (faster delay)
}
