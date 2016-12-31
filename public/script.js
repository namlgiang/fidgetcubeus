(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44699912-27', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');


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

  $(".nav-0").click(function() {
    $('html, body').animate({
      scrollTop: $(".video").offset().top - 50
    }, 500);
  });
  $(".nav-1").click(function() {
    $('html, body').animate({
      scrollTop: $(".features").offset().top - 50
    }, 500);
  });
  $(".nav-2").click(function() {
    $('html, body').animate({
      scrollTop: $(".media").offset().top - 50
    }, 500);
  });
  $(".action-button, .nav-3").click(function() {
    $('html, body').animate({
      scrollTop: $(".shop").offset().top - 50
    }, 500);
  });

  $("form").submit(function() {
    fbq('track', 'InitiateCheckout');
    ga('send', 'pageview', 'InitiateCheckout');
    console.log("Track Init Check Out");
  });
});
