define(function(){

    function createSuggestionsDropdown(parent, suggestions){
        removeAllChildren(parent); //remove all the suggestions form the dropdown
    
        for (let index = 0; index < suggestions.length; index++) {
            const suggestion = suggestions[index];
    
            const newElement = document.createElement("li");
            newElement.textContent = suggestion;
            parent.appendChild(newElement);
            
        }
    }
    
    function removeAllChildren(parent){
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.lastChild);
        }
    }
    
    //filter only the suggestions that start with the input value
    function bestSuggestions(data, filter){
        return data.filter(function (a) {
            return a.startsWith(filter);
        });
    }
    

    function setup(listOfSuggestions){

        var searchInput = document.getElementById("search");
        var suggestionsInput = document.getElementById("suggestion");
        var suggestionsDropdown = document.getElementById("suggestions-dropdown");
        
        searchInput.onkeyup = function(event){
            var suggestions = searchInput.value ? bestSuggestions(listOfSuggestions, searchInput.value) : [];
            if(suggestions && suggestions[0]){
                suggestionsInput.value = searchInput.value ? suggestions[0] : "";
            }
            else {
                suggestionsInput.value = "";
            }
            if(event.keyCode === 39){ //check if the key pressed was the right arrow
                searchInput.value = suggestions[0] || "";
                removeAllChildren(suggestionsDropdown);
                suggestions = []; 
            }
            createSuggestionsDropdown(suggestionsDropdown, suggestions);
        }
    }
    
    return {setup: setup}

});