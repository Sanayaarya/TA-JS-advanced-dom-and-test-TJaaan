// let container = document.querySelector(".container")
// let listElm = document.querySelector(".infinte-scroll");
// alert ("The Dom Content Loding")
// function loadMore(){
// quotes.forEach((elm)=>{

//     let parentDiv = document.createElement("div");
//     parentDiv.classList.add("parentDiv");
//     let quote = document.createElement('h2');
//     quote.innerText = elm.quoteText;
//     let author = document.createElement('span');
//     author.innerText = `author => ${elm.quoteAuthor}`;
    
//     parentDiv.append(quote,author);
//     listElm.append(parentDiv);

// });

// }

// listElm.addEventListener('scroll',()=>{
//     if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight){
//         loadMore();
//     }
// });
// loadMore();

let root = document.querySelector('ul');

let max = 5;
let index = 0;

function addQuotes(){
  for(let i = 0; i < max; i++){
     let li = document.createElement('li');
     let blockQuote = document.createElement('blockQuote');
     let cite = document.createElement('cite');
     blockQuote.innerText = quotes[index].quoteAuthor;
     cite.innerText = quotes[index].quoteAuthor;
     li.append(blockQuote,cite);

     root.append(li);
     index++;
  }
}
addQuotes();

document.addEventListener('scroll' , ()=>{
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = documnet.documentElement.clientHeight;
  if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
     addQuotes();
  }
});


window.addEventListener('DOMContentLoaded' ,()=>{
  alert(`The content of the DOM is loaded`)
})