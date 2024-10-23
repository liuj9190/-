// 問題和選項結構
const questions = [
    // 定義一組問題及其對應的選項，每個選項指向下一個問題的索引。
    {
        question: "當你感到憤怒時，你通常會怎麼做？",
        options: [
            { text: "A. 壓抑情緒，忍著不發作 ", next: 1 },// 點擊此選項後跳轉到問題 1
            { text: "B. 直接表達出來，不管後果", next: 2 },// 點擊此選項後跳轉到問題 2
            { text: "C. 冷靜下來，嘗試解決問題", next: 3 }// 點擊此選項後跳轉到問題 3
        ],
        background: 'images/default-background.jpg'  // 確保有背景圖片
    },
    {
        question: "你是否會因為長期壓抑情緒而最終爆發？",
        options: [
            { text: "是", next: 4 },// （1）跳轉到問題 4
            { text: "否", next: 5 } // （1）跳轉到問題 5
        ],
        background: 'images/background1.jpg'  // 壓抑情緒的背景
    },
    // 以下的問題和選項類似，直到最終結果的頁面顯示。

    // 每個問題會引導至下一個問題，並最終顯示結果。
    {
        question: "你通常會後悔自己表達憤怒的方式嗎？",
        options: [
            { text: "是", next: 6 },//（2）
            { text: "否", next: 7 } //（2）
        ],
        background: 'images/background2.jpg'  // 表達憤怒時的背景
    },
    {
        question: "你有固定的方法來幫助自己冷靜下來嗎？",
        options: [
            { text: "是", next: 8 }, //（3）
            { text: "否", next: 9 } //（3）
        ],
        background: 'images/background3.jpg'  // 表達憤怒時的背景
    },
    {
        question: "你有沒有嘗試過其他方法來緩解壓抑的情緒？",
        options: [
            { text: "是", next: 10 }, //（4）
            { text: "否", next: 11 }  //（4）
        ],
         background: 'images/background1.jpg'
    },
     {
        question: "你覺得自己有很好的情緒控制能力嗎？",
        options: [
            { text: "是", next: 12 },  //（5）
            { text: "否", next: 13 }  //（5）
        ],
         background: 'images/background1.jpg'
    },
    {
        question: "你會向他人道歉或解釋自己當時的情緒嗎？",
        options: [
            { text: "是", next: 14 },  //（6）
            { text: "否", next: 15 }  //（6）
        ],
         background: 'images/background2.jpg'
    },
    {
        question: "你在表達憤怒後是否感到輕鬆，但情況未改善？",
        options: [
            { text: "是", next: 16 },  //（7）
            { text: "否", next: 17 }   //（7）
        ],
         background: 'images/background2.jpg'
    },
    {
        question: "你是否能夠持續運用冷靜方法來應對未來的憤怒情況？",
        options: [
            { text: "是", next: 18 },   //（8）
            { text: "否", next: 19 }   //（8）
        ],
         background: 'images/background3.jpg'
    },
     {
        question: "你是否考慮過學習更多有效的冷靜技巧？",
        options: [
            { text: "是", next: 20 },   //（9）
            { text: "否", next: 21 }  //（9）
        ],
         background: 'images/background3.jpg'
    },
     // 產品展示結束，當到達最終結果時，顯示產品和描述。
    { result: "測驗分析：\n你正在探索新的情緒管理方式，繼續嘗試會有改善！", productImage: "disaster_artist.jpg", description:  "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n長期壓抑情緒容易導致爆發，建議學習如何及時釋放情緒。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n你對自己的情緒管理比較自信，但也要留意潛在的壓力積累。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n你可能忽視了自己內心的壓力，應學會更多情緒調節的方法。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n你有反思的能力，這是情緒管理的一個關鍵步驟。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n直接表達憤怒後，不反思容易影響人際關係，建議學習與人有效溝通。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》" ,link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553" },
  { result: "測驗分析：\n直接發洩情緒短期內可能緩解壓力，但長期影響人際關係，應嘗試新的應對方式。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553" },
    { result:  "測驗分析：\n你習慣發洩情緒，但沒有看到結果，建議學習如何在情緒管理中達到平衡。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  },
    { result: "測驗分析：\n你有良好的情緒調節策略，繼續保持並鼓勵他人學習這些方法。", productImage: "disaster_artist.jpg", description:"《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》" ,link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553" },
    { result: "測驗分析：\n雖然你嘗試冷靜，但可能還需要更多練習或技巧來鞏固這一能力。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553" },
    { result: "測驗分析：\n探索更多情緒管理技巧將幫助你更從容應對憤怒情緒。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》" ,link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553" },
    { result: "測驗分析：\n你應考慮拓展自己對情緒管理的認識，以便在壓力情境中表現得更加沉著。", productImage: "disaster_artist.jpg", description: "《憤怒管理（人際管理三部曲（1））：\n學習如何適當發怒，與因應他人發怒的技巧》",link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0104553"  }
];

// 當前問題索引
let currentQuestion = 0;  // 保存當前問題的索引，初始值為 0，表示第一個問題。

// 初始化問題和選項，並按三層布局顯示
function loadQuestion() {
    let questionObj = questions[currentQuestion];  // 取得當前問題
    let questionContainer = document.getElementById('question');  // 顯示問題的容器
    let topOptionsContainer = document.getElementById('options-top');  // 顯示選項的頂部容器
    let middleOptionsContainer = document.getElementById('options-middle');   // 顯示選項的中部容器
    let bottomOptionsContainer = document.getElementById('options-bottom');   // 顯示選項的底部容器

    // 檢查是否是結果頁面
    if (questionObj.result) {
        showProduct(questionObj);   // 如果是結果頁面，顯示產品內容
        return true;
    }

    // 更改背景圖片，根據問題設定的背景
     changeBackground(questionObj.background);

    // 顯示問題
    questionContainer.innerText = questionObj.question;

    // 清空舊的選項，確保顯示新問題的選項
    topOptionsContainer.innerHTML = '';
    middleOptionsContainer.innerHTML = '';
    bottomOptionsContainer.innerHTML = '';

    // 創建選項按鈕並將它們按順序分配到三層
    questionObj.options.forEach((option, index) => {
        let button = document.createElement('button');   // 創建一個按鈕元素
        button.innerText = option.text;   // 設置按鈕文本
        button.onclick = () => chooseOption(option.next);   // 點擊按鈕後執行選擇下一個問題

        // 將選項按順序分配到不同的容器
        if (index % 3 === 0) {
            topOptionsContainer.appendChild(button);   // 第一個選項進入頂部容器
        } else if (index % 3 === 1) {
            middleOptionsContainer.appendChild(button);   // 第二個選項進入中部容器
        } else {
            bottomOptionsContainer.appendChild(button);   // 第三個選項進入底部容器
        }
    });
}

// 選擇選項，載入下一個問題或結果
function chooseOption(nextQuestion) {
    currentQuestion = nextQuestion;   // 將當前問題的索引設置為下一個問題的索引
    // 根據問題索引動態更改背景
    if (currentQuestion === 1) {
        changeBackground('images/background1.jpg');   // 如果問題是 1，顯示背景1
    } else if (currentQuestion === 2) {
        changeBackground('images/background2.jpg');  // 如果問題是 2，顯示背景2
    } else if (currentQuestion === 3) {
        changeBackground('images/background3.jpg');  // 如果問題是 3，顯示背景3
    } else {
        //changeBackground('images/default-background.jpg');  // 預設背景
    }

    loadQuestion();   // 加載下一個問題
}


// 動態更改背景圖片
function changeBackground(imagePath) {
    console.log("Background path:", imagePath);  // 確認路徑是否正確
    let backgroundImage = document.getElementById('background-image');
    if (imagePath) {
        backgroundImage.src = imagePath;  // 動態更改圖片路徑
        backgroundImage.style.display = 'block';  // 確保圖片顯示
    } else {
        backgroundImage.style.display = 'none';  // 隱藏圖片
    }
}
// 顯示產品介紹，並將結果頁縮小顯示
function showProduct(product) {
    // 隱藏問題容器
    document.getElementById('question-container').style.display = 'none';   
    
    // 隱藏所有背景圖片
    let backgroundImages = document.getElementsByClassName('background-image');
    for (let i = 0; i < backgroundImages.length; i++) {
        backgroundImages[i].style.display = 'none';  // 隱藏每個背景圖片元素
    }

    // 顯示產品容器，並設置其樣式
    let productContainer = document.getElementById('product-container');
    productContainer.style.display = 'block';   
    productContainer.style.width = '100%';  // 設置產品頁的寬度為100%
    productContainer.style.margin = '0 auto';  // 產品容器居中顯示
    
    // 处理測驗分析部分
    let productTitle = '測驗分析：<br>';
    let productConclusion = product.result.replace('測驗分析：', '');

    // 顯示產品信息
    document.getElementById('product-title').innerHTML = `<span class="red-highlight">${productTitle}</span>${productConclusion}`;
    let productImage = document.getElementById('product-image');
    productImage.src = `images/products/${product.productImage}`;  
    productImage.alt = product.result;
    productImage.parentElement.href = product.link;  // 設置圖片鏈接
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('click-hint').style.display = 'block'; // 显示提示文本
}


// 重新開始
function restart() {
    currentQuestion = 0;   // 將當前問題重置為第一個問題
    document.getElementById('product-container').style.display = 'none';   // 隱藏產品頁面
    document.getElementById('question-container').style.display = 'block';   // 顯示
    loadQuestion();
}

// 頁面載入時自動加載第一個問題
loadQuestion();