
$(document).ready(function() {
    $(".overlay, .overlay-message").show();
    
    $(".overlay-message").click(function() {
        $(".overlay, .overlay-message").hide();
    });
});