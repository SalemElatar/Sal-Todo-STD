$(function () {
  "use strict";

  //show SideBar
  $('.content-area .toggle-sidebar, .page .sidebar .fa-times').on("click", function () {
    $('.page .sidebar, .page .content-area').toggleClass('show-sidebar');
  });


  //toggle Sidebar sub pages 
  $('.sidebar-pages-menu li a').on("click", function () {
    $(this).next('.sidebar-subPages-menu').slideToggle();
    $(this).find('.fa-angle-right').toggleClass('toggle-subPages')
  });



  //Dark Theme toggle  button
  $('.sidebar-settings-menu .dark-btn').on("click", function () {
    $(this).toggleClass('dark-toggle')
  });

  
  
  
  
  
  
  
  
});