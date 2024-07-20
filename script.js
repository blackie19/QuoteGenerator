//
const btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{

    quote: '"It is during our darkest moments that we must focus to see the light." ' ,
    person:'—Aristotle'
},{
    quote:'"All dreams are within reach. All you have to do is keep moving towards them."',
    person:'— Viola Davis'
},
{
    quote:'"When it comes to luck, you make your own."',
    person:'— Bruce Springsteen'
},
{
    quote:'"Hard things will happen to us. We will grow more resilient because of it."',
    person:'— Taylor Swift'
},
{
    quote:'"Your story is what you have, what you will always have. It is something to own."',
    person:'— Michelle Obama'
},
{
    quote:'"You just gotta keep going and fighting for everything, and one day you’ll get to where you want."',
    person:' — Naomi Osaka'
},
{
    quote:'"Stand before the people you fear and speak your mind – even if your voice shakes."',
    person:'— Maggie Kuhn'
},
{
    quote:'"A problem is a chance for you to do your best." ',
    person:'— Duke Ellington'
},
{
    quote:'"To live is the rarest thing in the world. Most people just exist."',
    person:'Oscar Wilde'
}, 
{
    quote:'"Failure is the condiment that gives success its flavor." ',  
    person:'— Truman Capote'
},
];
btn.addEventListener('click',function(){

let random= Math.floor(Math.random()* quotes.length);

quote.innerText= quotes[random].quote;
person.innerText= quotes[random].person;
})