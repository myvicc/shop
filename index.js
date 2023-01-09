import { Good } from "./Good.js";
import { Category } from "./Category.js";
import {Shop} from "./Shop.js";


const data = {
    categories: [
        new Category("smartphone", 1, [1, 2, 3]),
        new Category("music", 2, [4, 5]),
        new Category("watches", 3, [6, 7, 8])
    ],
    goods: [
        new Good("Apple iPhone 13 128GB", 1, "Передовая система двух камер 12 Мп (широкоугольная и сверхширокоугольная); Фотографические стили, Smart HDR 4, Ночной режим, съёмка HDR-видео 4K в стандарте Dolby Vision", "https://content1.rozetka.com.ua/goods/images/big_tile/221023395.jpg", 13000),
        new Good("Samsung Galaxy A53 5G 8/256GB", 2, "Экран (6.5\", Super AMOLED, 2400x1080)/ Samsung Exynos 1280", "https://content1.rozetka.com.ua/goods/images/big_tile/263968709.jpg", 3600),
        new Good("Motorola G32 6/128GB Grey", 3, "Экран (6.5\", LCD, 2400x1080) / Qualcomm Snapdragon 680 (2.4 ГГц)", "https://content.rozetka.com.ua/goods/images/big_tile/301433932.jpg", 6000),
        new Good("Беспроводные Bluetooth TWS наушники", 4, "Диапазон частот наушников 20 - 20 000 Гц", "https://content1.rozetka.com.ua/goods/images/big/300818601.jpg", 2400),
        new Good("Игровые наушники XTRIKE ME Gaming", 5, "XTRIKE ME GH-509 – полноразмерная геймерская гарнитура, которая поможет максимально погрузиться в виртуальные игровые сюжеты.", "https://content.rozetka.com.ua/goods/images/big/255615861.png", 6700),
        new Good("Спортивные часы Garmin Tactix 7", 6, "Часы-навигатор Garmin Tactix 7 PRO Solar с солнечной зарядкой, традиционным кнопочным управлением и сенсорным дисплеем предлагают специализированные тактические функции, а также картографию, музыку, расширенные функции для тренировок и многое другое.", "https://content2.rozetka.com.ua/goods/images/big/301078530.jpg", 1200),
        new Good("Часы Garmin Instinct 2 Solar", 7, "Прочный смартчас Instinct® 2 Solar Tactical с GPS-приемником оснащен специальными тактическими функциями и подзарядкой от солнца для еще большей работы от батареи.", "https://content.rozetka.com.ua/goods/images/big/279652502.jpg", 4000),
        new Good("Спортивные часы Garmin Forerunner", 8, "Часы Garmin Forerunner 55 Whitestone - легкие и удобные смарт-часы разработаны для людей с любым уровнем физической подготовки, которые идеально подходят для занятий бегом и ежедневного использования", "https://content.rozetka.com.ua/goods/images/big/301065820.jpg", 8700),
    ]
}
console.log(data);

const shop = new Shop(data);

shop.init();













