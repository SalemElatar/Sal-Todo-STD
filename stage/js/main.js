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
  $('.to-do-list-app1 .txtb').on("keyup", function (e) {
    //13 Means Enter Button
    if(e.keyCode == 13 && $('.to-do-list-app1 .txtb').val() != ""){
      
      var task = $('<div class="task"></div></div>').text($('.to-do-list-app1 .txtb').val());
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
          $(this).unbind("click").css("color", "#000");
          $(this).css("cursor", "none");
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
      $('.to-do-list-app1 .to-do-tasks').append(task);

      //To Clear Input
      $('.to-do-list-app1 .txtb').val("");
    }
  })



  

  //Today's Planner Functions
  $('.tasks-list .add-task').on("keyup", function (e) {
    //13 Means Enter Button
    if(e.keyCode == 13 && $('.tasks-list .add-task').val() != ""){
      
      var newTask = $('<div class="newtask"></div>').text($('.tasks-list .add-task').val());
      
      
      var delTask = $('<i class="fas fa-trash-alt"></i>').click(function () {
        var T = $(this).parent()
        T.fadeOut(function () {
          T.remove()
        })
        //Limit Tasks Number to 4 
        if ($('.newtask').length > 4 ) {
          $('.tasks-list .add-task').attr('disabled', 'disabled');
        } else{
          $('.tasks-list .add-task').removeAttr('disabled');
        }
      })
      var checkTask = $('<i class="fas fa-check"></i>').click(function () {
        var C = $(this).parent()
        C.fadeOut(function () {
          $('.tasks-list .comp-tasks').append(C)
          C.fadeIn();
        })
        $(this).remove()
      })
      
      //Appending & Sorting
      var value = $("#priorty option:selected").val();
      
      if(value == "priorty 1") {
        $('.tasks-list .to-do-tasks .priorty1-task').append(newTask);
      } else if(value == "priorty 2") {
        $('.tasks-list .to-do-tasks .priorty2-task').append(newTask);
      } else if(value == "priorty 3") {
        $('.tasks-list .to-do-tasks .priorty3-task').append(newTask);
      } else if(value == "priorty 4") {
        $('.tasks-list .to-do-tasks .priorty4-task').append(newTask);
      }
      
      

      newTask.append(checkTask, delTask);
      
      
    
      //Limit Tasks Number to 4 
      if ($('.newtask').length > 3 ) {
        $('.tasks-list .add-task').attr('disabled', 'disabled');
        alert("Max Tasks For day is 4")
      } else{
        $('.tasks-list .add-task').removeAttr('disabled');
      }


      // Sort Tasks By Pirorty 
        
          
      //To Clear Input
      $('.tasks-list .add-task').val("");

    }
  })
  
  //Add Timer To a Session
  $('.tasks-list .Today-sessions .work-session i.fas.fa-plus-circle').on("click", function () {
    var newTimer = '<div class="new-session"><span class="timer">25:00</span></div>';
    $(this).parent().append(newTimer);
    
    //Limit the Pomos Number & Make "Add" Icon Unclickable
    if ($('.new-session').length > 2 ) {
      $(this).unbind("click").css("color", "#000");
      $(this).css("cursor", "text");
    }

    //Set a timer to 25 minutes
    $(this).siblings(".new-session").on("click", function () {
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
            $('.new-session').css("background-color", "#88cb5e")
          }
        }
    })
  })













});