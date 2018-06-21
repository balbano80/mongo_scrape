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
    // console.log($(this).data("id"));
    const queryURL = "/save/" + $(this).data("id");
    console.log(queryURL);
    $.ajax({
        method: "GET",
        url: queryURL
    }).then(function(data){
        console.log("in app.js received saved block", data);
        window.location.href = "/getSaved";
    })
})



})