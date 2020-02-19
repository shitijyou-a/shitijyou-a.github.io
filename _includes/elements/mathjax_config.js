$(function() {
    MathJax.Hub.Config({
        showProcessingMessages: false,
        "HTML-CSS": { availableFonts: [], webFont: "NEO-Eular" },
        tex2jax: {
            inlineMath: [['$','$'],['\\(','\\)']],
            displayMath: [ ["\\[","\\]"] ]
        }
    });
});
