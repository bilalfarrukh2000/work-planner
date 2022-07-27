// Variables for current date and current time
var presentDay = moment ().format("dddd, MMMM Do, YYYY")
var presentTime = moment().format('h');

// Setting Current Day at the header
$("#currentDay").html(presentDay);

// Setting color of text area based on current time
function timeSetter() {


  $(".time-block").each(function () {
      var timeTable = parseInt($(this).attr("id"));
      

      if (timeTable < presentTime || timeTable > 5) {
          $(this).children("textarea").removeClass("future");
          $(this).children("textarea").removeClass("present");
          $(this).children("textarea").addClass("past");
      }
      else if (timeTable == presentTime) {
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("future");
        $(this).children("textarea").addClass("present");
      }
      else {
          $(this).children("textarea").removeClass("present");
          $(this).children("textarea").removeClass("past");
          $(this).children("textarea").addClass("future");

      }
  })
}

// Getting value of textarea and storing it in localstorage with key-value pairs of parent id
$('button').on("click", function() {
  var selector=$(this).parent();
  var text = selector.children("textarea").val();
  var key=selector.attr("id");
  localStorage[key]=text;
});

//Displays the data after refresh
$(window).on('load', function(){

  var vals = Object.values(localStorage);
  var keys = Object.keys(localStorage);
  var sizeofLocalStorage = Object.keys(localStorage).length;

      for(var i=0;i<sizeofLocalStorage;i++) {
          var selector=$('*[id='+keys[i]+']');
          selector.children("textarea").val(vals[i]);
      }
});

timeSetter();
