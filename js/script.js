$(function(){

    let url = "https://cit-iti-200.github.io/slow-project/data-1.json"
    
    $.get(url, function(response){
        console.log(response);
    });
});