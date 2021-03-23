let quotesData;

function getQuotes() {
  return fetch(
  "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").

  then(response => response.json()).
  then(responseJson => {
    quotesData = responseJson;
  }).
  catch(error => {
    console.error(error);
  });
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "" };

    this.setRandomQuote = this.setRandomQuote.bind(this);
    getQuotes().then(() => {
      this.setRandomQuote();
    });
  }

  setRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    let randomQuote = quotesData.quotes[randomIndex];
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author });

  }

  render() {
    let tweetLink =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("h1", { id: "text" }, "\"", this.state.quote, "\""), /*#__PURE__*/

      React.createElement("h2", { id: "author" }, "- ", this.state.author), /*#__PURE__*/

      React.createElement("a", { id: "tweet-quote", href: tweetLink, target: "_top" }, /*#__PURE__*/
      React.createElement("button", { id: "tweet-quote-button", style: {
          float: 'left' } }, "Tweet Quote")), /*#__PURE__*/



      React.createElement("button", {
        id: "new-quote",
        onClick: this.setRandomQuote,
        style: {
          float: 'right' } }, "New Quote")));






  }}

ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById("root"));