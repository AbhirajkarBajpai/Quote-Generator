var person = document.querySelector('.person');
var quote = document.querySelector('.quote');
var btn = document.querySelector('#new-quote');

const quotes = [{
    quote: '“Be yourself; everyone else is already taken.”',
    person: 'Oscar Wilde'
}, {
    quote: '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
    person: 'Marilyn Monroe'
}, {
    quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
    person: 'Albert Einstein'
}, {
    quote: 'You only live once, but if you do it right, once is enough.”',
    person: 'Mae West'

}, {
    quote: '“Be the change that you wish to see in the world.”',
    person: 'Mahatma Gandhi'

}, {
    quote: '“In three words I can sum up everything I\'ve learned about life: it goes on.”',
    person: 'Robert Frost'

}, {
    quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    person: ' Mahatma Gandhi'

},{
    quote: '"IF You Wanna Se Heaven You Will Need TO Die"',
    person: ' Anonymous'

}];

btn.addEventListener('click', function (){
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})