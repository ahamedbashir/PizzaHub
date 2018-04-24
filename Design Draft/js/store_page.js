$(document).ready(function() {
    $("#add-pop-item-btn").click(function(){
        var order = $("#pop-item-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-bvg-btn").click(function(){
        var order = $("#beverage-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-menu-item-btn").click(function(){
        var order = $("#menu-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-spec-item-btn").click(function(){
        $(".list-group-flush").append('<li class="list-group-item">'+ 'Custom Item' +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $(".checkout-items ul").on("click", "#remove-btn", function(){
        $(this).parent().remove();
        //Reduce price
    });
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
  });