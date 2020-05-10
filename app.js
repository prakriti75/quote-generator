/*
var quote=["I never loose.I either win or learn",
           "Anyone who has never made a mistake has never tried anything             new.",
           "Live as if you were to die tomorrow.Learn as if you were to             live forever"];
var author=["Nelson Mandela","Albert Einstein","Mahatma Gandhi"];
*/


(function(){

    
    var quote=["I never loose.I either win or learn",
           "Anyone who has never made a mistake has never tried anything new.",
           "Live as if you were to die tomorrow.Learn as if you were to live forever"];
var author=["Nelson Mandela","Albert Einstein","Mahatma Gandhi"];


document.getElementById("btn").addEventListener("click",function(){
    var quoteIndex,authorIndex;
    for(var i=0;i<quote.length;i++)
    {
     quoteIndex=Math.floor(Math.random()*quote.length);
    }
  console.log(quoteIndex);
  console.log(authorIndex);
  document.getElementById("quote").innerHTML="quote=" + quote[quoteIndex];
   document.getElementById("author").innerHTML="author=" + author[quoteIndex];

    
});
})();

/*
document.getElementById("btn").addEventListener("click",function(){
    var quoteIndex,authorIndex;
    for(var i=0;i<quote.length;i++)
    {
     quoteIndex=Math.floor(Math.random()*quote.length);
    }
  console.log(quoteIndex);
  console.log(authorIndex);
  document.getElementById("quote").innerHTML="quote=" + quote[quoteIndex];
   document.getElementById("author").innerHTML="author=" + author[quoteIndex];

    
});
*/






