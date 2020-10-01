(function(){

  var quotes = [
    {
      "name": "Nelson Mandela",
      "quote": "I never loose.I either win or learn"
    },
    {
      "name": "Albert Einstein",
      "quote": "Anyone who has never made a mistake has never tried anything new."
    },
    {
      "name": "Mahatma Gandhi",
      "quote": "Live as if you were to die tomorrow.Learn as if you were to live forever"
    },
    {
      "name": "Abdul Kalam",
      "quote": "Dreams are not those which u have in sleep, it's those which doesn't let you sleep."
    }
  ]
  function myQuotes(){
    const index = Math.floor(Math.random()*quotes.length)
    document.getElementById("personalityName").innerHTML = quotes[index].name
    document.getElementById("quotes").innerHTML = quotes[index].quote
  }

  document.getElementById("btn").onclick = myQuotes;
  

})();





