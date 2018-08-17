var films = ["Jurassic Park", "Titanic", "Toy Story", "Loving Vincent",
            "Lilo & Stitch", "Finding Nemo", "Inception", "Star Wars Episode I",
            "Star Wars Episode II", "Star Wars Episode III", "Star Wars Episode IV",
            "Star Trek", "Star Trek Into Darkness", "Star Trek Beyond"
            ];

require(['inline-autocomplete'], function(inlineAutocomplete){
    inlineAutocomplete.setup(films);
})