$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});
//to show login Modal when btn is clicked
$("#loginBtn").click(function() {
    $("#loginModal").modal("show")
});
//to show reserve Modal when btn is clicked
$("#reserveBtn").click(function(){
    $("#reservationModal").modal("show")
});
//to dismiss the login Modal when close button is clicked
$("#loginClose").click(function(){
    $("#loginModal").modal("hide")
});
//to dismiss the reserve Modal when close button is clicked
$("#reserveClose").click(function(){
    $("#reservationModal").modal("hide")
});