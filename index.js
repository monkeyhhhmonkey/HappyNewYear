let pinyin1 = document.getElementById("pinyin1");
let pinyin2 = document.getElementById("pinyin2");
let pinyin3 = document.getElementById("pinyin3");
let pinyin4 = document.getElementById("pinyin4");

let phraseChinese1 = document.getElementById("phraseChinese1");
let phraseChinese2 = document.getElementById("phraseChinese2");
let phraseChinese3 = document.getElementById("phraseChinese3");
let phraseChinese4 = document.getElementById("phraseChinese4");

let phraseEnglish = document.getElementById("phraseEnglish");

let button = document.getElementById("button");
let random = Math.random();

// 存放拼音和祝贺词的数组
let p1 = [
    "xīn",
    "gōng",
    "dà",
    "wàn",
    "nián",
    "shēn",
    "xīn",
    "gōng"
    ]
let p2 = [
    "nián",
    "xī",
    "jí",
    "shì",
    "nián",
    "tī",
    "xiāng",
    "hè"
    ]
let p3 = [
    "kuài",
    "fā",
    "dà",
    "rú",
    "yōu",
    "jiàn",
    "shì",
    "xiī"
    ]
let p4 = [
    "lè",
    "cái",
    "lì",
    "yī",
    "yú",
    "kāng",
    "chéng",
    "xǐ"
    ]
let phrasesC1 = [
    "新",
    "恭",
    "大",
    "萬",
    "年",
    "身",
    "心",
    "恭"
    ]
let phrasesC2 = [
    "年",
    "喜",
    "吉",
    "事",
    "年",
    "體",
    "想",
    "賀"
    ]
let phrasesC3 = [
    "快",
    "發",
    "大",
    "如",
    "有",
    "健",
    "事",
    "所"
    ]
let phrasesC4 = [
    "樂",
    "財",
    "利",
    "意",
    "餘",
    "康",
    "成",
    "禧"
    ]
let phrasesE = [
    "(Happy new year)",
    "(Congratulations on your prosperity)",
    "(Great luck and prosperity)",
    "(May 10,000 things go according to your wishes)",
    "(Every year have more than you need)",
    "(Wishing you good health)",
    "(May all your heart's desires come true)",
    "(Congratulations in the new year)"
    ]

// 讲文本内容设置为数组中的随机短语
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];

let onclick = function() {
    let random = Math.random();

    pinyin1.textContent = p1[Math.floor(random * p1.length)];
    pinyin2.textContent = p2[Math.floor(random * p2.length)];
    pinyin3.textContent = p3[Math.floor(random * p3.length)];
    pinyin4.textContent = p4[Math.floor(random * p4.length)];
    phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
    phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
    phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
    phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
    phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
}
// 单击按钮时随机更改祝贺词
button.addEventListener("click", onclick);