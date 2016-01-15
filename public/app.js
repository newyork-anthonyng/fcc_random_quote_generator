$(function() {
  $('.quote-button').click(function() {
    // make API request to retrieve quote
    var myUrl = '/quote';
    $.get(myUrl, function(data) {
      // data is an object with quoteText and quoteAuthor keys
      showQuote(data.quoteText, data.quoteAuthor);
    });
  });

  function showQuote(quoteText, quoteAuthor) {
    $('.quote-text').empty().html('<p>' + quoteText + '</p>');
    $('.quote-text').append('<p id="author">' + quoteAuthor + '</p>');
  };

});
