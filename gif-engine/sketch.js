var endpoint = "http://api.giphy.com/v1/gifs/search?"
var api_key = "&api_key=dc6zaTOxFJmzC"
var query;

function setup() {
    noCanvas();
    var button = select('#submit');
    button.mousePressed(askGiphy);
    query = select('#query');
}

function askGiphy() {
    var url = endpoint + "q=" + query.value() + api_key;
    console.log(url);
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
    }
}
