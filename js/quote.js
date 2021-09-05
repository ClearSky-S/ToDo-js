const quotes = [
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
    {
        quote: "True art is characterized by an irresistible urge in the creative artist.",
        author: "Albert Einstein",
    },
    {
        quote: "What I cannot create, I do not understand.",
        author: "Richard Feynman",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

let randomNumber = Math.floor(Math.random()*quotes.length);
// const date = new Date();
// randomNumber = date.getDate()%quotes.length;
const todaysQuote = quotes[randomNumber];

quote.textContent=todaysQuote.quote;
author.textContent=todaysQuote.author;
