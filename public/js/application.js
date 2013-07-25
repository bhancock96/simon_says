$(document).ready(function(){
  $('#get_color').on('click', function(event){
    console.log("button clicked");
    $.post('/color', function(response){
      var cell = response.cell;
      var color = response.color;
      $('li:nth-child(' + response.cell + ')').css("background-color", color);
    })
  });
});
