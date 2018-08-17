function init(){

    //Get the list of possible suggestions
    var films = ["Jurassic Park", "Titanic", "Toy Story", "Loving Vincent",
                "Lilo & Stitch", "Finding Nemo", "Inception", "Star Wars"
                ];

    //add the action to the search input
    var searchInput = document.getElementById("search");
    suggestionsInput = document.getElementById("suggestion");

    searchInput.onkeyup = function(){
        
        var suggestions = bestSuggestions(films, searchInput.value);
        console.log("Suggestions = ", suggestions);
        
        if(suggestions && suggestions[0]){
            suggestionsInput.value = searchInput.value ? suggestions[0] : "";
        }
        else {
            suggestionsInput.value = "";
        }
    }

}

//filter only the suggestions that start with the input value
function bestSuggestions(data, filter){
    return data.filter(function (a) {
        return a.startsWith(filter);
    });
}

window.onload = init;