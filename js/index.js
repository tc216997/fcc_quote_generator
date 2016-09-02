var num, color, quoteId, authorId, quote, author, tweet, quoteArray;
var newArray = [];
var shareOnTwitter = "https://twitter.com/intent/tweet?text=";

function randomRGB () {
	var r = Math.floor(Math.random() * 200 + 1);
	var g = Math.floor(Math.random() * 200 + 1);
	var b = Math.floor(Math.random() * 200 + 1);
	return 'rgb' + '(' + r + ',' + g + ',' + b + ')';
}

$.ajax({
  url: "https://codepen.io/Siegoboy/pen/zqzKyb.js",
  dataType: "json",
  async: false,
  success: function(data) {
    quoteArray = data;
  }
});

for (var i = 0; i < quoteArray.length; i++){
  if(quoteArray[i].quote.length < 138) {
    newArray.push(quoteArray[i]);
  }
}

function randomNum (){
  return Math.floor(Math.random() *  newArray.length) + 1;
}

function newQuote(){
  num = randomNum();
  quote = newArray[num].quote;
  author = newArray[num].author;
  quoteId = $('#quote');
  authorId = $('#author');
  color = randomRGB();
  tweet = "https://twitter.com/intent/tweet?text=" + quote;
  
  $('body').css('background-color', color).fadeIn(1500);
  $('#quote').css('color', color);
  $('#author').css('color', color);
  $('.btn').css('background-color', color).hide().fadeIn(1500);
  $('a').hide().fadeIn(1500);
  $(quoteId).text('"' + quote + '"').hide().fadeIn(1500);
  $(authorId).text('-' + author).hide().fadeIn(1500);
  $('a').attr('href', tweet);
}

$('document').ready(function() {
  newQuote();
  $('#newQuote').on('click', function(){
    newQuote();
  });
});