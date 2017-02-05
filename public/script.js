// <iframe width="640" height="360" src="https://www.youtube.com/embed/Q3Dnj43MIIU?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>

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

  $(".color span").click(function() {
    $(".color span").removeClass("active");
    $(this).addClass("active");
    var id=$(this).index(".color span");
    $(".preview").attr("src", "product/"+id+".jpg");
    $(".form").removeClass("active");
    $(".form-" + id).addClass("active");
    $(".shop .title").text($(".form-" + id).attr("pname"));
  });
  $(".quantity").change(function() {
    $(this).parent().find("[name='li_0_quantity']").val($(this).val());
  });
  $(".shipping").change(function() {
    var s = $(this).val();
    if(s == 0) {
        $(this).parent().find("[name='li_1_name']").val("Standard Free Shipping");
        $(this).parent().find("[name='li_1_price']").val("0");
    }
    if(s == 1) {
        $(this).parent().find("[name='li_1_name']").val("USPS Priority Mail - (2 to 5 business days)");
        $(this).parent().find("[name='li_1_price']").val("14");
    }
    if(s == 2) {
        $(this).parent().find("[name='li_1_name']").val("USPS Priority Mail Express - (1 to 2 business days)");
        $(this).parent().find("[name='li_1_price']").val("64");
    }
  });

  $("form").submit(function() {
    fbq('track', 'InitiateCheckout');
    ga('send', 'pageview', 'InitiateCheckout');
    console.log("Track Init Check Out");
  });

  $(".color-0").click();
  $(".quantity").val(1);
  $(".shipping").val(0);
});
