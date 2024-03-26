在進行文字分享前，可以先觀看我製作的成果動畫✨

<iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/uZde5V-74AE?si=PhdERwSBclMAtBh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="margin-top:2rem;"></iframe>

---

# ![第一節](/images/nonogram/01.webp) NONOGRAM遊戲規則

一個空白的方形網格為基底，每行每列給定對應提示，在自行塗黑後須符合提示，提示間至少要以一個空白格子區隔開。​詳細玩法可參考我的另一個專題設計作品《NONOGRAM：動畫介紹短片》。

 ![nonogram](/images/nonogram/2.webp)

 ---

# ![第二節](/images/nonogram/02.webp) 研究動機

Nonogram 的玩法簡單且相當容易上手，但題目的難易度主要受總網格數與需塗黑格子所佔比例等因素影響，例如當需塗黑的格子總數越少或連續塗黑格子的長度越短，都會讓每組提示產生更多種可能組合，進而增加解題的難度與所需時間。像是下方的實例，5x5的Nonogram，某列的提示數組為「2，1」，則能產生出 3 種可能的組合；若是某列提示數組改為「2」，則產生出的可能組合將會變成 4 種。

 <table class="w-full">
 <tr>
 <td align="center">

  ![nonogram](/images/nonogram/3.webp)
  
  </td>
  <td align="center">
 
   ![nonogram](/images/nonogram/4.webp)
  
  </td>
 </tr>
 </table>


若是讓電腦執行解題，目前有許多種不同的演算法研究，大致上可分成兩類：單格導向及區塊導向。

![nonogram](/images/nonogram/4.jpg)

從計算複雜度來看，區塊導向作法優於單格導向作法，因為單格導向解法需要處理的可能性數量非常多，論上需處理高達 2^625 種可能的答案組合，但現今競賽中前幾名的解題程式仍主要採用單格導向的方式。雖然單格導向作法已經過多年的研究改進，並不需要逐一處理所有可能性，因此在實際求解速度上優於區塊導向作法。但區塊導向作法在理論上具有處理可能性較少的優勢，因此我們預期透過這次研究，發展出比純粹單格導向作法更有效率的Nonogram解題方法。本研究計畫將針對單格導向作法與區塊導向作法分別進行研究，並預期開發出新的高效解題演算法。

---

# ![第三節](/images/nonogram/03.webp) 研究方法

過去學長姐們的研究中都是以陽明交大資工系吳毅成教授等人在[1]中的Nonogram解題架構為基礎，進行後續的演算法改進與優化，而我們亦是如此，因此我們從[1]中瞭解其解題架構融合了基於動態規劃之單行求解(Line Solving and Propagate)、全面探測(Fully Probing)、遞迴窮舉(Backtracking Search)等三大主要部分後，針對單行求解(Line Solving and Propagate)及遞迴窮舉(Backtracking Search)進行更深入的研究，並將研究細分成三大部分。

>Intelligence and AI in Games, 5(3), 251-264 (2013)

![Intelligence and AI in Games, 5(3), 251-264 (2013)](/images/nonogram/5.jpg)

---

## 1. 實做五個邏輯判斷規則

根據Sancho等人在[2]提出的Logic-based heuristic演算法，Logic-based heuristic為單格導向，主要有五種邏輯判斷規則，及三種前置處理(Preprocessing)。因預期此種方法有機會可以替代[1]中解題架構的單行求解(Line Solving and Propagate，後面我們統稱「嘗試所有組合」)，所以我們主要實作五個邏輯規則並與單行求解(Line Solving and Propagate)方法進行比較，從填點數及程式運行速率分析此兩種方法的優劣，並從中找出新的邏輯規則以提升整體解題速度。

>[2] Sancho, S. S., Angel M. Perez-Bellido; Antonio Portilla-Figueras, Yao, X.:Solving Japanese Puzzles with Heuristics.IEEE Symposium on Computational Intelligence and Games.(2007)

![Sancho, S. S., Angel M. Perez-Bellido; Antonio Portilla-Figueras, Yao, X.:Solving Japanese Puzzles with Heuristics.IEEE Symposium on Computational Intelligence and Games.(2007)](/images/nonogram/6.jpg)

前面提到，Logic-based heuristic主要有五種邏輯判斷規則及三種前置處理規則，整體判斷的規則皆依循極左可能解答(Left-most solution)及極右可能解答(Right-most solution)的填點狀態為基礎，如下圖：

![極左可能解答(Left-most solution)及極右可能解答(Right-most solution)](/images/nonogram/7.png)

![前置規則](/images/nonogram/規1.webp)
![前置規則](/images/nonogram/規2.webp)
![前置規則](/images/nonogram/規3.webp)
![規則一](/images/nonogram/規4.webp)
![規則二](/images/nonogram/規5.webp)
![規則三](/images/nonogram/規6.webp)
![規則四](/images/nonogram/規7.webp)
![規則五](/images/nonogram/規8.webp)

---

## 2. 將蒙地卡羅樹搜尋法引進NONOGRAM解題流程

主要將蒙地卡羅樹搜尋法(Monte Carlo Tree Search, MCTS)應用至[1]中的遞迴窮舉(BacktrackingSearch)階段，希望能夠運用MCTS的優勢來協助Nonogram在遇到較為困難的魔王題時，能夠減少其所花費的解題時間，藉此提升Nonogram的整體解題速度及效率。MCTS搜尋起始於一個根節點，整體的基本流程圖如下圖，其中的流程將反覆執行四大階段：選擇(Selection)、拓展(Expansion)、模擬(Simulation)、反向傳播(Backpropagation)，直到取得預定品質的搜尋結果或預設的執行時間結束才停止。

![蒙地卡羅樹](/images/nonogram/5.webp)

我們將MCTS每個階段流程都調整成適用於Nonogram的作法，並以Nonogram所追求的最短解題時間為宗旨。調整後的MCTS實作流程之概念如下：首先，取得當前的盤面上仍是未知點(Unknown)的所有位置及數量統計，每個節點所記錄的內容為當前變化的盤面，接著再反覆由調整後的四大階段流程執行，只要在其中的某一個過程內取得盤面解，隨即停止反覆執行的過程，並回傳已取得盤面解的訊息。

![蒙地卡羅樹](/images/nonogram/6.webp)

---

## 3. 以挪移方式求解NONOGRAM

如前面動機所述，理論上來說Nonogram求解模式分成單格導向(pixel-based)，以每個格子為最小單位來決定其該塗黑或白；區塊導向(block-based)，以每個符合線索提示長度的塗黑區塊為單位，決定其在該行或列所應擺放的正確位置。

近年來文獻中主要的Nonogram解題方法都屬於單格導向(pixel-based)的解題模式，而區塊導向的 Nonogram 解題方法在文獻中較為少見，但也並非完全沒有，國內陽明交大的陳玲慧教授團隊與師大的林順喜教授團隊即分別曾在先前研究中採用過類似的概念。區塊導向一開始是從列的角度出發，將每一列設定好一個最靠左且符合線索提示的排列狀態，接著挪移每一列的黑色區塊以尋找出一個符合所有行線索提示的最終解答。

![區塊挪移](/images/nonogram/7.webp)

我們主要採整合性Nonogram求解方法，在Nonogram解題的前面階段採用單格填點的模式，也就是[1]中的單行求解(Line Solving and Propagate)、全面探測(Fully Probing)等以求出部分解，盡可能達到限縮後續所需搜尋空間的目標，並在最後的遞迴窮舉(Backtracking Search)求解階段，我們則改用不同於以往作法的區塊挪移方式來取代原本的單格猜點搜尋作法，藉以分析是否能提升求解速度。

![以挪移方式求解NONOGRAM](/images/nonogram/8.png)

---

# ![第四節](/images/nonogram/04.webp) 研究結果

## 1. 實做五個邏輯判斷規則

我們以Nonogram一次的競賽題目共一千題進行實驗，並與[1]中的單行求解(Line Solving and Propagate)進行比較。

從右圖所顯示的前二十題節錄中，我們可以觀察出在填點數的方面，單行求解(Line Solving and Propagate)所填的點獲得壓倒性勝利，但在解題時間方面我們實作的五個邏輯規則卻快了單行求解(Line Solving and Propagate)幾百倍。再來我們算出單一填點所需花費的時間，如右圖最右側所示，可以觀察出我們實作的五個邏輯規則及三種前置處理仍舊快過單行求解(Line Solving and Propagate)許多。

![實做五個邏輯判斷規則](/images/nonogram/8.webp)

上圖為單行求解(Line Solving and Propagate，縮簡為Li)及五個邏輯規則(Logic-based heuristic，縮簡為Lo)的Nonogram解題結果前二十題節錄

![實做五個邏輯判斷規則](/images/nonogram/9.webp)

---

## 2. 將蒙地卡羅樹搜尋法引進Nonogram解題流程

將情境轉換成Nonogram的解題方式後，解題程式能正常執行。雖然目前仍有遇到一些記憶體空間不夠存放的題型，但已能從正確完成解題的諸多題目中，觀察到有6題題目比主流版本的解題程式之執行時間還要快一些，如下圖所示。又於呼叫全面探測(Fully Probing)次數當中觀察到，蒙地卡羅樹搜尋法版本的呼叫次數有31題小於主流版本至少一次以上，且有20題呼叫次數與主流版本相同，可見蒙地卡羅樹搜尋法存在一定的發展優勢。

![將蒙地卡羅樹搜尋法引進Nonogram解題流程](/images/nonogram/10.webp)

結論：雖然目前引進的蒙地卡羅樹搜尋法之改良版本尚無法完全勝過主流方法，且有一些記憶體空間存取不足的問題待調整，但仍能從上述實驗結果中觀察到有些題目解題時間比主流方法短，故蒙地卡羅樹搜尋法之Nonogram改良程式在未來的發展潛力值得期待。

---

## 3. 以挪移方式求解NONOGRAM

基於文獻中尚未有兩種模式的詳細分析比較，我們進行了相關研究與實驗，如下圖，實驗結果顯示區塊挪移模式在小盤面具有顯著優於單格填點模式的求解效率。

![以挪移方式求解NONOGRAM](/images/nonogram/11.webp)

基於這個發現，我們進一步提出了新的整合性求解方法，並與原本單格導向完整方法(也就是[1]的作法)進行實驗比較，如下圖，實驗結果證實整合性求解方法能有效提升Nonogram求解效率，達到明顯快過單格導向完整方法的解題速度，是具有潛力的發展方向。另一方面，目前區塊挪移方法尚屬發展的初步階段，還有進步空間存在，值得我們繼續研究。

![以挪移方式求解NONOGRAM](/images/nonogram/12.webp)