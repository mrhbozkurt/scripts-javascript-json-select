$(document).ready(function() {

$(function(){

    // Country List
    $.getJSON("country.json", function(data){
        $.each(data.country, function(key,item){
            $("select#country").append("<option value="+ item.id +">" + item.text + "</option>"); 
        });
    });

    // Country Code List
    $.getJSON("country.json", function(data){
        $.each(data.countryCode, function(key,item){
            $("select#countryCode").append("<option value="+ item.id +">" + item.text + "</option>"); 
        });
    });

});



})