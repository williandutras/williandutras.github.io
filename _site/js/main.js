$(document).ready(function(){
    $('.menu-anchor').on('click touchstart', function(e){
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });

    $('#follow').click(function(){
      $('.rede-sociais').css("display", "flex");
      $('.facebook').show();
      $('.twitter').show();
      $('.github').show();
      $('.snapchat').show();
      $('.youtube').show();
    });

    $(".facebook").click(function(){
      $('.facebook').fadeOut("slow");
      window.open("https://www.facebook.com/williandutrass");
    });
    $(".twitter").click(function(){
      $('.twitter').fadeOut("slow");
      window.open("https://twitter.com/williandutrass");
    });
    $(".github").click(function(){
      $('.github').fadeOut("slow");
      window.open("https://github.com/williandutrass/");
    });
    $(".snapchat").click(function(){
      $('.snapchat').fadeOut("slow");
      window.open("https://www.snapchat.com/add/williandutrass");
    });
    $(".youtube").click(function(){
      $('.youtube').fadeOut("slow");
      window.open("https://www.youtube.com/williandutrass");
    });

})

particlesJS.load('particles-js', '../particlesjs-config.json', function() {
        //console.log('callback - particles.js config loaded');
});
