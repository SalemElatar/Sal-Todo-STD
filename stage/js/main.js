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
  

  // Prevents menu from closing when clicked inside 
  document.getElementById("Dropdown").addEventListener('click', function (event) { 
    event.stopPropagation(); 
  });
  document.getElementById("Dropdown2").addEventListener('click', function (event) { 
    event.stopPropagation(); 
  });
  document.getElementById("Dropdown3").addEventListener('click', function (event) { 
    event.stopPropagation(); 
  });


  //To-Do List Function
  $('.to-do-list .txtb').on("keyup", function (e) {
    //13 Means Enter Button
    if(e.keyCode == 13 && $('.to-do-list .txtb').val() != ""){
      
      var task = $('<div class="task"></div></div>').text($('.to-do-list .txtb').val());
      var del = $('<i class="fas fa-trash-alt"></i>').click(function () {
        var p = $(this).parent()
        p.fadeOut(function () {
          p.remove()
        })
      })
      var check = $('<i class="fas fa-check"></i>').click(function () {
        var p = $(this).parent()
        p.fadeOut(function () {
          $('.comp-tasks').append(p)
          p.fadeIn();
        })
        $(this).remove()
      })
      var pomo = $('<i class="fas fa-plus-circle"></i>').click(function () {
        var newPomo = '<div class="new-pomo"><span class="timer">25:00</span></div>';
        $(this).parent().append(newPomo)
        //Limit the Pomos Number & Make "Add" Icon Unclickable
        if ($('.new-pomo').length > 3 ) {
          $(".task .fa-plus-circle").unbind("click").css("color", "#000");
          $(".task .fa-plus-circle").css("cursor", "none");
        }

        //Set a timer to 25 minutes
        $(this).siblings(".new-pomo").on("click", function () {
            var timeLeft = 1500
            var timer = $(this).find(".timer");

            var countDown = setInterval(function () {
              "use strict"
              secondPass();
            }, 1000);

            function secondPass() {
              var mins = Math.floor(timeLeft / 60);
              var sec = timeLeft % 60;

              if (sec < 10){
                sec = "0" + sec;
              }

              if (mins < 10){
                mins = "0" + mins
              }

              timer.html(mins + ":" + sec)
            

              if (timeLeft > 0) {
                timeLeft = timeLeft - 1;
              } else {
                clearInterval(countDown);
                timer.html("Done")
                $('.new-pomo').css("background-color", "#88cb5e")
              }
            }
        })



      })

      
      //Appending
      task.append(pomo, check, del);
      $('.to-do-list .to-do-tasks').append(task);

      //To Clear Input
      $('.to-do-list .txtb').val("");
    }
  })


});