$(function(){

    $("#scrape").on("click", function(){
        // event.preventDefault()
        $.ajax({
            method: "GET",
            url: "/scrape"
        }).then(function(data){
            // console.log(data);
        }).then(function(data){
            console.log("in page relocate block of app", data)
            window.location.href ="/articles";
        });
    });

    $(".btnSave").on("click", function(){
        // console.log($(this).data("id"));
        const queryURL = "/save/" + $(this).data("id");
        console.log(queryURL);
        $.ajax({
            method: "GET",
            url: queryURL
        }).then(function(req, data){
            console.log("in app.js received saved block", data);
            window.location.href = "/getSaved";
        });
    });

    $("#delete").on("click", function(event){
        event.preventDefault();
        const queryURL = "/delete/" + $(this).data("id");
        $.ajax({
            method: "GET",
            url: queryURL
        }).then(function(result){
            console.log(result);
            window.location.href ="/getSaved";
        })

    })


    $('#elem').popover()
})