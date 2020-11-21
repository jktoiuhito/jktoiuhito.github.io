"use strict";
const req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    const quotes = JSON.parse(req.responseText);
    const quote = quotes[Math.floor(Math.random() * Math.ceil(quotes.length))];
    const blockquote = document.getElementById("quote");
    const footer = document.createElement("footer");
    footer.className = "blockquote-footer";
    const cite = document.createElement("cite");
    blockquote.append(document.createTextNode(quote.quote), footer);
    footer.append(
      document.createTextNode(quote.author ? quote.author + ", " : ""),
      cite
    );
    cite.append(document.createTextNode(quote.source));
  }
};
req.open("GET", "quotes.json", true);
req.send();
