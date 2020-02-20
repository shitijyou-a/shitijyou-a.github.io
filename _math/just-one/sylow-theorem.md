---
layout: page
title: Sylowの定理
description: 有限群の位数と部分群に関する Sylow の定理の証明．
blob_url: https://github.com/shitijyou-a/MathNotes/blob/master/SylowTheorem/sylow.pdf
raw_url: https://github.com/shitijyou-a/MathNotes/raw/master/SylowTheorem/sylow.pdf
---

# 概要
これは Keith Conrad 氏のノート ["The Sylow Theorems"](http://www.math.uconn.edu/~kconrad/blurbs/grouptheory/sylowpf.pdf)を元にした，
Sylow の定理の証明とその応用についてのノートです．
Sylowの定理は次の定理です．

> $ \newcommand{\Syl}{\operatorname{Syl}} $
> 任意の有限群$G$について，
> その位数が素数$p$，$p$に互いに素な正数$m$，そして非負整数$n$によって
> $|G|=p^{n}m$と表されるとする．
> 更に群$G$の$p$-Sylow部分群全体の集合を$\Syl_p(G)$とおく．以下が成り立つ．
> 
> 1. $G$は$p$-Sylow部分群を持ち(すなわち$\Syl_p(G) \neq \emptyset$)，またこれは$G$の任意の$p$-部分群を含む．
> 1. $G$の全ての$p$-Sylow部分群は互いに共役である．
> 1. $\lvert\Syl_p(G)\rvert \equiv 1 \mod p$.
> 1. 任意の$p$-Sylow部分群$P$について $\lvert\Syl_p(G)\rvert = [G : \operatorname{Norm}_G(P)]$
> 1. $\lvert\Syl_p(G)\rvert$ は $m$ の約数である．

[PDFファイルへ]({{ page.blob_url}})（"Download"からダウンロードできます．）
<div style="text-align: center;">
<iframe
    src="https://docs.google.com/viewer?url={{ page.raw_url }}&embedded=true"
    width="100%"
    height="640px">
</iframe>
</div>
