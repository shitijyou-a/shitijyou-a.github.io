---
layout: page
title: Artin スタックへの入門
pdf_blob: https://github.com/shitijyou-a/MathNotes/blob/master/IntroToArtinStacks2020Spring/master.pdf
pdf_raw: https://github.com/shitijyou-a/MathNotes/raw/master/IntroToArtinStacks2020Spring/master.pdf
---

# 概要
Artin スタック（別名：代数的スタック，代数的園）への入門です．
途中で景やファイブレーション，スタック，代数的空間にも入門します．

{% include /elements/embedded-pdf.html %}

# 入門した後
入門した後の話題についても知る限り書いておきます．
少し古いですが，Mr. J. Aplerが2009年に書いた
["A Guide to the Literature on Algebraic Stacks"](https://maths-people.anu.edu.au/~alperj/papers/stacks-guide.pdf)は
Artin スタックに関する様々な話題への案内に成っています．

## 基本的概念の拡張
まず，スキームで扱われている様々な概念の拡張が考えられます．
以下のようなものの Artin スタック/代数的空間が考えられています．

- Artin スタック/代数的空間の上の層，
- コホモロジー (cohomology)，
- 交差理論 (intersection theory)，
- 群の作用，
- トーリック多様体 (toric variety)，
- Hilert / Quot / Hom スキーム

## モジュライ空間
PDF本体でも書いていますが，Artin スタックはモジュライ問題を考える中で開発されました．
スキーム論の範囲で考えられてきたモジュライ空間を Artin スタックのモジュライ空間で考える研究は，
そこそこ（かなり）の成果を上げています．
例えばArtin スタックの精密モジュライ空間が存在する必要十分条件は簡潔なものが知られています．
Keel-Mori の定理は Artin スタックの粗モジュライ空間が存在するための簡潔な十分条件を与えています．
他には Mr. J. Alperが新しいモジュライ空間として
"good moduli space"を提唱し，その性質がかなり良いことなどを示しました（[参考](https://arxiv.org/abs/0804.2242)）．
存在条件についての成果も発表されています（[参考](https://arxiv.org/abs/1812.01128)）．

## GAGAの拡張
$\newcommand{\C}{\mathbb{C}}$
代数的空間に限れば，GAGA の拡張も考えられています．
ここでは藤原一宏 先生の["Algebraic spaces and schemes"](http://hdl.handle.net/2433/214841)の内容を紹介します．

GAGA とは，
ある種の解析的空間（maniforld の方の多様体）と，ある種のスキーム/代数的空間が対応しているという理論です．
複素数体$\C$上局所有限型 (locall of finite type over $\C$) のスキーム/代数的空間の圏から，
複素解析的空間の圏への関手が構成できます．
この関手は「解析化 (analytification) 関手」とか「GAGA型関手」などと呼ばれます．
GAGAはこの関手についての研究だと言えます．

Mr. M. Artin は$\C$上固有 (proper over $\C$) な代数的空間の圏と，
Moishezon 空間というものの圏が，GAGA 型関手によって圏同値であることを示しました．
藤原一宏 先生と加藤文元 先生の共同研究 （[参考](http://hdl.handle.net/2433/214841)）により，
$\C$上分離的 (separated over $\C$) な代数的空間は GAGA 型の関手によって
リジッド (rigid) 解析空間へ写ることが分かっています．
