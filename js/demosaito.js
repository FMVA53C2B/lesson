$(document).ready(function(){
    $('.btn').on('click',function(){
      $('.btn').toggleClass('open');
      $('.menu').toggleClass('open');
      $('body').toggleClass('noscroll');

      });
    $('.closebtn').on('click',function(){
    $('.menu').removeClass('open');
    $('body').removeClass('noscroll');
    });
    });
    //メニュー以外をクリックで閉じる
    var nav = $('.menu');
    $('.content').click(function() {
    if(nav.hasClass('open')) {
    $('.menu').removeClass('open');
            }
          });
