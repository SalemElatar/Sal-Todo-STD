$(function () {
  "use strict";

  // Colors:
  var darkBlue = "#182038";

  //show SideBar
  $('.content-area .toggle-sidebar, .page .sidebar .fa-times').on("click", function () {
    $('.page .sidebar, .page .content-area').toggleClass('show-sidebar');
  });


  //toggle Sidebar sub pages 
  $('.sidebar-pages-menu li a').on("click", function () {
    $(this).next('.sidebar-subPages-menu').slideToggle();
    $(this).find('.fa-angle-right').toggleClass('toggle-subPages')
  });


  //Dark Theme toggle
  function darkToggle() {
    if ($('.sidebar-settings-menu .dark-btn').hasClass('dark-toggle')) {
      $("html, body").css({'color': '#fff', 'background-color': darkBlue});
    } else{
      $("html, body").css({'color': '#000', 'background-color': '#fff'});
    }
  }

  darkToggle();
  $('.sidebar-settings-menu .dark-btn').on("click", function () {
    $(this).toggleClass('dark-toggle');
    darkToggle()
  });


  //Full Page Icon
  var elem = document.documentElement;

  $('.header .fa-expand').on("click", function () {
    $(this).toggleClass('toggle-full-scrn')
    if ($(this).hasClass('toggle-full-scrn')) {
      openFullscreen();
    } else{
      closeFullscreen();
    }
  });

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
  




});