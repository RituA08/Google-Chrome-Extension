


fetch("https://zenquotes.io/api/random")
    .then(data => data.json())
    .then(Quotedata => {
    const quote = Quotedata[0].q;
    const quotelement = document.getElementById('quotelement');
    quotelement.innerHTML = quote;
})
