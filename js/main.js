//Credit to Lucas Bebber vvvvv 

$(document).ready(function() {
  var $img = $("img");
  var data = $img.attr("src");
  var maxErrors = 100;
  var margin = 2200;

  function update() {
    var corrupted = data;
    if (Math.random() > 0.7) {
      var errors = Math.round(Math.random() * maxErrors)
      for (var i = 0; i < errors; i++) {
        var p = margin + Math.round(Math.random() * (corrupted.length - margin - 1));
        corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
      }
    }
    $img.attr("src", corrupted);

  }
  update();
  setInterval(update, 120);
  
  $("#name").hover(function() {
    $(this).attr("src","img/Sean Murphy obf.png");
      }, function() {
    $(this).attr("src","img/Sean Murphy.png");
  });
});

