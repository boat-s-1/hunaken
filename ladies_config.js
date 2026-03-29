/**
 * 初音の女子戦マスターデータ
 * 【統計期間】2023年1月1日 〜 2026年3月現在
 * 【対象レース】全国24場の女子戦（ヴィーナス・オールレディース等）
 */

const LADIES_MASTER_DATA = {
    "01": { name: "桐生",   escape: 51, count: 480, update: "2026/03/25", note: "夜は機力安定" },
    "02": { name: "戸田",   escape: 42, count: 512, update: "2026/03/25", note: "3・4捲り多発。イン受難。" },
    "03": { name: "江戸川", escape: 45, count: 390, update: "2026/03/20", note: "波とうねりで旋回難。" },
    "04": { name: "平和島", escape: 44, count: 450, update: "2026/03/20", note: "差し場。バック逆転多。" },
    "05": { name: "多摩川", escape: 52, count: 505, update: "2026/03/25", note: "静水面。伸び足に注意。" },
    "06": { name: "浜名湖", escape: 53, count: 490, update: "2026/03/25", note: "広い。外マイの威力強。" },
    "07": { name: "蒲郡",   escape: 56, count: 520, update: "2026/03/28", note: "ナイター。イン先マイ有利。" },
    "08": { name: "常滑",   escape: 56, count: 510, update: "2026/03/28", note: "風の影響大。1マーク注視。" },
    "09": { name: "津",     escape: 54, count: 470, update: "2026/03/20", note: "風の変わり目に波乱あり。" },
    "10": { name: "三国",   escape: 53, count: 460, update: "2026/03/25", note: "1Mホーム側広く差し優勢。" },
    "11": { name: "びわこ", escape: 48, count: 440, update: "2026/03/20", note: "うねりでインがバタつく。" },
    "12": { name: "住之江", escape: 59, count: 600, update: "2026/03/28", note: "イン信頼度高。壁が重要。" },
    "13": { name: "尼崎",   escape: 55, count: 530, update: "2026/03/25", note: "インが粘りやすい形状。" },
    "14": { name: "鳴門",   escape: 50, count: 420, update: "2026/03/20", note: "捲り差しが入りやすい。" },
    "15": { name: "丸亀",   escape: 54, count: 510, update: "2026/03/25", note: "潮位でインの強さが激変。" },
    "16": { name: "児島",   escape: 57, count: 495, update: "2026/03/25", note: "インの押し切りが強い。" },
    "17": { name: "宮島",   escape: 54, count: 485, update: "2026/03/25", note: "潮の引き際、捲りに注意。" },
    "18": { name: "徳山",   escape: 63, count: 580, update: "2026/03/28", note: "女子戦でも屈指の逃げ場。" },
    "19": { name: "下関",   escape: 60, count: 550, update: "2026/03/28", note: "イン強。機力差が出る。" },
    "20": { name: "若松",   escape: 58, count: 540, update: "2026/03/28", note: "1-2, 1-3が安定のスジ。" },
    "21": { name: "芦屋",   escape: 61, count: 590, update: "2026/03/28", note: "シード番組で逃げ濃厚。" },
    "22": { name: "福岡",   escape: 45, count: 430, update: "2026/03/20", note: "うねりと2ジカ捲り注意。" },
    "23": { name: "唐津",   escape: 55, count: 500, update: "2026/03/25", note: "インが伸び返して残る。" },
    "24": { name: "大村",   escape: 66, count: 650, update: "2026/03/28", note: "イン逃げの聖地。盤石。" }
};

const STATS_INFO = {
    period: "直近3年間（2023年〜2026年3月）",
    total_races: "約12,000レース"
};
