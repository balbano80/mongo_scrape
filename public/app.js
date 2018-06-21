$(function(){

$("#scrape").on("click", function(event){
    event.preventDefault()
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(function(data){
        console.log(data);
      }).then(function(){
          $.ajax({
              method: "GET",
              url: "/articles"
          }).then(function(data){
            // console.log("in app.js get articles return", data);
            window.location.href = "/articles";
          })
      })
});


$("#save").on("click", function(){

    $.ajax({
        method: "PUT",
        url: "save"
    }).then(function(data){
        console.log(data);
    })
})



})