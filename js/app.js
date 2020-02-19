var displayWikipediaData = function(){
    
var $linksElement = $('#links');
var searchString = $('#searchString').val();
var wikipediaUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString + '&format=json&callback=wikiCallback';
$.ajax({
    url:wikipediaUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
        var linkLists = res[1];
        linkLists.forEach(function(item){
              var url = 'https://en.wikipedia.org/wiki/'+ item;            
             $linksElement.append('<li><a href="' + url + '" target="blank">' + item + '</a></li>');
             return url;
         })
    
    }

});
   
   return false; 
};

$('#form').submit(displayWikipediaData);
