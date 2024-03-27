# 1. 視覺設計與切版

## 設計規範

因為只是基本的切版練習，所以設計規範寫得比較簡約，主要風格定為豐富的色彩及可愛的樣式，但不失簡約的感覺：

1. **色彩**：使用#f4745b、#226663、#e5ac9c、#dabc5a四色為主要色。
 
2. **格線**
   - width: 1320px
   - count: 12px
   - column width: 88px
   - gutter: 24px
3. **排版**
   - 所有主要內容都在container內
   - 背景色、底圖延伸至滿版寬
4. **文字**
   - 內文統一16px
   - 行高24
   - 只有標題、重點片段字可以加粗，其他不可
5. **排版**
   - 間隔為16的倍數

## 使用語言

1. **HTML**：因為屬於個人練習，class 以BEM 命名法為基底命名。
1. **SCSS**：區分成以下幾大資料夾，因為只是單純切版，有些並不需要使用到。
   1. base
   2. conponents
   3. layout
   4. pages
   5. themes
   6. utils
   7. vendors
2. **jQuery**：主要用於載入組件（如：Header......等等）

## 圖片來源

均來自本人設計，使用的軟體為Illustrator 2024及Photoshop 2024

![設計](/images/websiteLayout/2.png)

## 程式碼：https://github.com/wenyanlin/Layout-Practice.git

## 預覽圖

![截圖](/images/websiteLayout/1.png)

---

# 2. 組件製作

這一次練習為多頁製作，盡量嘗試不同的功能頁面，做成一個較為完整的網站。

## 設計規範

主要風格定為簡約單色調、兩欄式，並且規範更為簡單，將實際練習要點聚焦於組件製作上。

1. **色彩**：使用#d03537為主要色，#f7f3ee為次要色。
 
2. **格線**：width: 1290px

3. **排版**：所有主要內容都在container內

4. **文字**：使用Noto Sans TC

5. **排版**：無

## 使用語言

1. **HTML**：因為屬於個人練習，class 以BEM 命名法為基底命名。
1. **SCSS**：區分成數個不同用途的資料夾，並以all.scss將所有scss引入並轉譯成css。
   
    ```SCSS
    //Utils
        @import 'utils/variables';
    //Base
        @import 'base/basic';
        @import 'base/text';
        @import 'base/animate';
        @import 'base/noProductPage';
    //Theme
    //Pages
        @import 'pages/index';
        @import 'pages/allProduct';
        @import 'Pages/news';
        @import 'Pages/company';
        @import 'Pages/products';
        @import 'Pages/faq';
        @import 'Pages/download';
        @import 'Pages/contact';
    //Components
        @import 'components/carousel';
        @import 'components/header';
        @import 'components/footer';
        @import 'components/location';
        @import 'components/titleBanner';
        @import 'components/recommand';
        @import 'components/backtotop';
        @import 'components/orderSOP';
        @import 'components/downloadButton';
        @import 'components/signinup';
        @import 'components/loading';
    //Layout
        @import 'layout/rwd';
    //Vendors
        @import 'vendors/Bootstrap.min';
    //Vendors-extensions
    ```

2. **jQuery**

## 圖片來源

均來自本人設計，使用的軟體為Illustrator 2024及Photoshop 2024

## 程式碼：https://github.com/wenyanlin/Layout-Practice-2.git

## 說明

### Navbar

Navbar有兩列，分別用於其他功能及導覽作用，其中產品總欄是使用`$.getJSON`導入。

![Navbar](/images/websiteLayout/4.gif)

---

### 首頁

![首頁](/images/websiteLayout/3.png)

從架構上而言，是為了讓新舊客戶都能快速使用本網站，因此沒有過多的商品推薦區域。

首頁如上圖所示，其中因為輪播圖沒有需要客製化的打算，所以直接使用bootstrap製作，如下圖。

![輪播圖](/images/websiteLayout/1.gif)

---

輪播圖向下分成左右兩欄，左欄上方為「新手上路」，使用`Hover`時更換圖片的方式製作動畫，吸引新客點擊

![新手上路](/images/websiteLayout/2.gif)

---

快速查價的選項復刻了[這個作品](https://codepen.io/vulchivijay/pen/rxyBpg)，使用`option`的`value`額外新增一個互動性的結構，並隱藏原來預設的整組`select`，這裡純粹是為了好玩，若要實際運用在網站上，可能會發生比較多不可預期的Bug。

![快速查價](/images/websiteLayout/3.gif)

---

最新消息的區域是使用jQuery 的`$.getJSON`抓取本網站存放最新消息的JSON檔，經過處理後只讓前三則顯示完整內容，其餘只顯示兩行。有趣的是我還特意計算了前三則顯示公告的行數若過多，會自動隱藏最下面的幾則消息，但現在看來最好的做法依然是限制前三則訊息的行數（但比後面幾則還多行），這樣更有利於製作。

![最新消息](/images/websiteLayout/4.png)

---

### 產品頁

![產品頁](/images/websiteLayout/5.png)

產品頁的版型參考了[印刷業同行](https://gainhow.tw/ProductCategory/Products?CustomProduct=BusinessCard)，不過大致上是一種常見的商品模版，再由網址去導入對印的產品資料，進而這個畫面就誕生了。比較特別的是我新增了**紙張材質**及**印後加工**的欄位，因為在這個行業最常變動的絕對是紙類及加工，並且一種商品會對應到數十種乃至數百種紙類，客戶該選擇哪一種紙類或加工就能在網路上先參考這兩個欄位的詳細說明，而外獨立出來對於時常變動的資料來說也會比較好維護。

![產品頁](/images/websiteLayout/5.gif)

### 常見須知 & 下載中心

![常見須知](/images/websiteLayout/6.png)

常見須知及下載中心的版型相同，也是參考了[印刷業同行](https://gainhow.tw/ProductCategory/Products?CustomProduct=BusinessCard)，上面可以選擇幾大類別，並產生網址的對應query，下面便會進行更新，其中新手上路也正是放在這裡，與首頁不同的是進度條會卡在點選的欄位上。

![常見須知](/images/websiteLayout/6.gif)

最後看一下下載中心

![下載中心](/images/websiteLayout/7.png)

整個練習就到這裡結束。


























