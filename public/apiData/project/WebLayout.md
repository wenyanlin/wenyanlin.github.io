# 1. 切版練習

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

# 2. 切版練習+組件製作

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

## 詳細說明

![預覽圖](/images/websiteLayout/3.png)







