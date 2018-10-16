let quotes = [
    {quote:"Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a new way to stand.", author: "Oprah Winfrey"},
    {quote:"The only wat to do great work is to love what you do.", author:"Steve Jobs"},
    {quote:"If you can't explain it simply, you don't understand it well enough.", author:"Albert Einstein"},
    {quote:"The key to immortality is first living a life worth remembering.", author:"Bruce Lee"},
    {quote:"If you don't turn your life into a story, you just become a part of someone else's story.",author:"Terry Pratchett"},
    {quote:"In the depth of winter, I finally learned that within me there lay an invincible summer.",author:"Albert Camus"},
    {quote:"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",author:"Ernest Hemingway"},
    {quote:"It is said that your life flashes before your eyes just before you die. That is true, it's called Life.", author:"Terry Pratchet"},
    {quote:"The world breaks everyone, and afterward, many are strong at the broken places.", author:"Ernest Hemingway"},
    {quote:"The most difficult thing is the decision to act, the rest is merely tenacity.", author:"Amelia Earhart"},
    {quote:"It isn't the mountains ahead to climb that wear you out, it's the pebble in your shoe.", author:"Muhammad Ali"},
    {quote:"There are far, far better things ahead than any we leave behind.", author:"C.S. Lewis"},
    {quote:"Never memorize something that you can look up.", author: "Albert Einstein"},
    {quote:"The price of anything is the amount of life you exchange for it.", author:"Henry David Thoreau"},
    {quote:"The secret of getting ahead is getting started.",author:"Mark Twain"},
    {quote:"It is said that your life flashes before your eyes just before you die. That is true, it's called Life.", author:"Terry Pratchet"},
    {quote:"There is only one corner of the universe you can be certain of improving, and that's your own self.",author:"Aldous Huxley"},
    {quote:"We may encounter many defeats, but we must not be defeated.",author:"Maya Angelou"},
    {quote:"If you don't build your dream, Someone will hire you to help", author:"Tony A. Gaskins"},
    {quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},
    {quote:"The mind can often mistake the talking for the doing.",author:"Derek Sivers"},
    {quote:"Light tomorrow with today.",author:"Elizabeth Barrett Browning"}
]
let color = ["#00aced","#00ed9e","#edc900","#ed8e00","#ed6b00","#9c0000","#009c82","#009c15","#00569c","#44009c","#80006a","#800015","#a00000"]

let quoteDom = document.getElementById('text');//Select #text quote
let quoteAuthorDom = document.getElementById('author');//Select #author of #text quote
let btnNewQuote = document.getElementById('new-quote');//select btn new quote
let tweet = document.getElementById('tweet-quote');

const randonQuoteNumber = () =>{
    let number = Math.floor(Math.random()*quotes.length);//generate randonNumber
    return number;
}
const randonColorNumber = () =>{
    let number = Math.floor(Math.random()*color.length);//generate randonNumber
    return number;
}

const randomQuote = ()=>{
    let num = randonQuoteNumber();
    let numColor = randonColorNumber();
    quoteDom.textContent=quotes[num].quote;
    quoteAuthorDom.textContent=quotes[num].author;
    document.body.style.background=color[numColor];
    document.getElementById("quote-box").style.color= color[numColor];
    document.getElementById("tweet-quote").style.color=color[numColor];
    document.getElementById("new-quote").style.background=color[numColor];
}

btnNewQuote.onclick = () =>{
    randomQuote()
}


randomQuote()
