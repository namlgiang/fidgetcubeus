// <iframe width="640" height="360" src="https://www.youtube.com/embed/Q3Dnj43MIIU?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>

$(document).ready(function() {
  $(".video-action").click(function() {
    $(".video-frame").addClass("active").html('<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/Q3Dnj43MIIU?rel=0&amp;showinfo=0&amp;controls=0&modestbranding=1&autoplay=1" frameborder="0" allowfullscreen></iframe>');
  });
  $(".color span").click(function() {
    $(".color span").removeClass("active");
    $(this).addClass("active");
    var id=$(this).index(".color span");
    $(".preview").attr("src", "product/"+id+".jpg");
    $(".form").removeClass("active");
    $(".form-" + id).addClass("active");
    $(".shop .title").text($(".form-" + id).attr("pname"));
  });
});
