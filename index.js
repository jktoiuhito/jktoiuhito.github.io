"use strict";
const req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    // Parse quotes
    const quotes = JSON.parse(req.responseText);

    // Get elements
    const quoteTextParagraph = document.getElementById("quote-text-paragraph");
    const quoteFooterFigcaption = document.getElementById(
      "quote-footer-figcaption"
    );
    const quoteNextButton = document.getElementById("next-quote");

    // Toggle element visibility
    document.getElementById("quote-spinner").remove();
    document.getElementById("quote-figure").hidden = false;
    quoteNextButton.hidden = false;

    const printQuote = () => {
      // Choose a random quote
      const quote =
        quotes[Math.floor(Math.random() * Math.ceil(quotes.length))];

      // Remove old quote
      while (quoteTextParagraph.hasChildNodes()) {
        quoteTextParagraph.removeChild(quoteTextParagraph.firstChild);
      }
      while (quoteFooterFigcaption.hasChildNodes()) {
        quoteFooterFigcaption.removeChild(quoteFooterFigcaption.firstChild);
      }

      // Append quote text
      quoteTextParagraph.append(document.createTextNode(quote.quote));

      // Append quote author
      const cite = document.createElement("cite");
      cite.append(document.createTextNode(quote.source));
      quoteFooterFigcaption.append(
        document.createTextNode(quote.author ? quote.author + ", " : ""),
        cite
      );
    };

    // Print a quote
    printQuote();

    // Assign button to print a new quote
    quoteNextButton.addEventListener("click", (e) => {
      e.preventDefault();
      printQuote();
    });
  }
};
req.open("GET", "quotes.json", true);
req.send();
