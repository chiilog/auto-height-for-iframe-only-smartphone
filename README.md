# Auto height for iframe only smartphone

スマホの画面回転でiframeの高さを取得し直して、iframeコンテンツの高さに合わせて再描画するJS。  
お仕事で必要になったので作りました。

`contentWindow.document`だとうまいこと高さが再取得できなくて`D.getElementsByTagName('html')`でやってます。  
`resize`を走らせてるのでPCブラウザでも動くはずですが検証してません。（もっとうまい方法あったらそっと教えてもらえると喜びます）
