# 本次使用到的工具及語言

- 網頁架構：Xmind
- 網頁圖示設計：Illustrator、Photoshop
- 版型設計：Figma
- 編譯環境：VScode
- 版本控制：Git（SourceTree）
- 框架：VUE3
- 建構工具：Vite
- CSS預處理器：SCSS
- 其他套件：
  - 載入資料：axios
  - Router：vue-router
  - Markdown解析：marked
  - Markdown標頭捕獲：marked-gfm-heading-id
  - 預防XSS：DOMPurify


# 事前準備

對於事前準備工作，主要有以下幾項：

1. 參考同行網站功能（如：查價系統......等等）
2. 蒐集不同網站風格（如：多彩簡約、簡約、傳統......等等）
3. 製作研究報告

研究報告會從一些特定功能上的比較到最終決議使用什麼風格的網頁，像是官方網站的公告應該放在何處才能滿足老客戶的需求及避免遮擋到新客戶踏入網站的初印象；或是輪播圖的設計具體要放些什麼內容才能展示公司的正面形象？並從參考了十幾家同業及類似產業的網站來輸出研究結果。

像是公告的部分：對於家裡蹲印刷來說，客戶會希望公告能放置在顯眼處，但以縣有官網來說佔據面積又太大，因此我想了幾種方式：

1. 在navbar上直接新增一個「最新公告」導覽
2. 在首頁輪播圖下方安插幾則最新公告，但不過於佔據版面
3. 在首頁最後方安插幾則最新公告，版面可以隨意佔據

並且最後選擇了1及2的方案，這兩種可以兼得，而3雖然也能與1進行搭配，但以現有客戶而言，3是他們不太會接觸到的區域，因此不適合。

# 網站架構

架構使用Xmind來製作，快速又方便。

![網站架構](/images/vuePractice/240130_整體架構.png)

從上述架構可以看到有劃掉一些內容，如：會員功能，這是因為這項功能會動輒的範圍較大，我希望以練習為目的，可以先去掉這些功能。

在製作好架構後，就開始設計規範。

# 設計規範

從設計規範開始我是以Figma進行的，使用了[Responsive Landing Page Design](https://www.figma.com/community/file/1222060007934600841/responsive-landing-page-design-website-home-page-design-agency-website-ui-design)模版進行設計，大致上區分成：Colors、Typography、Buttons、元件狀態及一些組件，以下列出幾個重要的設計圖：

## 顏色

![Colors](/images/vuePractice/Colors.png)

因為風格定位於多彩、簡約、可愛，所以我特意設定了兩種主要色調，這個色調之後也會用在圖片上，分別是`#474b6c`及`#dabe93`。這個配色給人一種奢華但低調的感覺，並且在業界比較不常見，卻又能完美與可愛的圖樣融合。

## 字體

![Typography](/images/vuePractice/Typography.png)

從設定上來看可以發現Headline字體比一般常見的h1小，但Body的字體又比常見的預設16px大，這是因為Headline我除了用於文章標頭外，還用於首頁及某些組件的標題，因為在設計上這些字會置中於螢幕，太大反而會搶了組件的風采；而Body字體設定為18px是為了家裡蹲印刷客戶，因為有較多年齡較長的客戶，字體大一點對他們來說會更合適，並且再大有可能會比較難區分Headline及Body之間的平衡，因此就這麼設計了。

## 按鈕

![Buttons](/images/vuePractice/Buttons.png)

從網站的使用需求來看，我決定採納使用一般常見的按鈕，這裡也比較保守，畢竟能使用的功能是最重要的。

## 表格

表格我一樣採納常見的設計方式，但為了符合可愛的需求，我會幫大多數組件倒圓角。

![元件狀態](/images/vuePractice/元件狀態.png)

## Layout Grid

- Count:12
  這是一個正常的桌上螢幕會選擇的行數。
- Width: 1320px
- Gutter: 24px

這裡的設計主要都會以桌上螢幕為主，這也是為了符合客戶使用習慣。

其他組件設計我就不一一列舉，所有設計都會符合上述條件。

# 版型設計

## 首頁

這是我預期的首頁樣式。

![首頁](/images/vuePractice/首頁.png)

主要設計理念如下：

- 輪播圖只放置活動及新品上架相關內容，以此提升公司形象（原來會放置成本上漲的公告）。
- 最新公告放置於輪播圖下。
- 為引導新舊客戶使用網站，我放置了熱門分類來帶大家認識公司有哪些產品。
- 首頁還可以放置一些公司最新的機型，以此推廣優勢產品。

首頁最主要還是給潛在客戶瀏覽，因此我在設計上會更偏向「展示產品」、「推廣公司」以及「如何使用」這幾個方面，並且採用一欄式可以在實作後更自由的上下移動以及擴增新內容。


## 目錄

因為產品分類及產品種類非常非常的多，若使用一般`ul`製作的Dropdown很難呈現所有產品，因此我參考了類似於購物網站這種產品種類也很多的網站，並設計出以下三種方案：

### 方案一

主要為兩階，和`ul`製作的Dropdown比較相似，且產品可以放置預覽圖，最右側可以放置宣傳廣告。

![目錄方案一](/images/vuePractice/目錄方案1.png)

優點：階層關係明確，放置預覽圖後空間還是很大、擴充性高
缺點：容易因為不知道產品隸屬分類而找不到產品

### 方案二

主打一目了然。

![目錄方案二](/images/vuePractice/目錄方案2.png)

優點：使用者不需要主動操作即可找到產品，是很多電商網站首選
缺點：產品繁多，需要再分出三類、擴充性差

### 方案三

改了方案二，把階層關係一道Navbar上。

![目錄方案三](/images/vuePractice/目錄方案3.png)

優點：同方案二、模糊了階層關係，讓產品分類相較瞭然
缺點：同方案二、產品區域容易與其他功能混淆

雖然我會更喜歡方案二的設計，但最後還是第一個方案最實用，所以選擇了最初的設計。

## 產品頁

![產品頁](/images/vuePractice/產品頁.png)

產品頁我選擇了多數電商設計版面，這是一個很直觀的設計，所以我就不介紹了。比較特別的是訂購區域，雖然我在架構上沒有打算作這一塊，但因為參考了外國同行Flyeralarm的設計，覺得放在這裡非常合適，針對每項產品的操作都只需要在同一個頁面完成是最理想的，並且該設計可以滿足：下載相應樣本檔、查詢價格、上傳檔案以及下單，未來有機會會希望製作這種格式。

## 三欄版型

![三欄版型](/images/vuePractice/三欄版型.png)

這種版型我是參考了許多技術文件或教學類網站，如：[Vue.js](https://cn.vuejs.org/)、[Material Design](https://m2.material.io/design)，很適用於各種需要閱讀文章及展示分類的區域，所以我用來製作本網站的大部分區域，如：常見問題、下載中心等等。

最左側是分類，中間可以撰寫任何文章，右側則是文章的索引或其他區域。因為閱讀文章的寬度範圍不需要太寬廣，以免造成閱讀困難，這種設計就可以讓畫面不會太空曠，且文章寬度合適，並且提供更好的查找方式。

# 前端實作

設計完版面以後，就要開始實際操作，以下是我在實作方面使用的相關工具及程式：

- 編譯環境：VScode
- 版本控制：Git（SourceTree）
- 框架：VUE3
- 建構工具：Vite
- CSS預處理器：SCSS
- 其他套件：
  - 載入資料：axios
  - Router：vue-router
  - Markdown解析：marked
  - Markdown標頭捕獲：marked-gfm-heading-id
  - 預防XSS：DOMPurify

## 實作方式

因為我使用SFC，所以Js、Template及css我都會寫在同一個vue檔中，並以下面資料夾結構區分。


## 資料夾結構

如一般Vite建構的檔案夾相同，將所有程式都寫在src中，其中我分出了以下幾個路徑：
- assets：所有靜態資源
- components：所有組件
- layouts：MainLayout（Header+內容+Footer）及三欄式版型
- plugins：從別的地方找來的實用程式
- router：所有路由
- views：所有頁面

## ESlint

- 採用Airbnb ESlint
- 資料夾使用Camel-Case命名法
- 檔案使用Pascal命名法
- class使用BEM命名法

## 組件實現

這裡只提及組件裡幾個比較細節的地方。

### 輪播圖

- 加入throttle
- 計時切換圖片
- 滑鼠hover時停止計時

![輪播圖](/images/vuePractice/1.png)

### 產品卡

- 在父組件以props傳送想要的類型會顯示出對應格式，具體有哪些類型可以參考下圖：

![產品卡](/images/vuePractice/2.png)

這樣很適合應用在不同需求上。

### 文章

文章使用markdown進行撰寫，並以axios載入，最後以marked轉成html、`DOMPurify.sanitize(html)`過濾，並用marked-gfm-heading-id抓取標頭以設定右側的索引列，使其可以跟著文章內容流動。

![文章](/images/vuePractice/2.gif)

- 有加載動畫

![文章](/images/vuePractice/1.gif)

目前大致上只實作了這幾個功能，未來還有機會再增加。





