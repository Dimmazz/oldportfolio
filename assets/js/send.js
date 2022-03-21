$(document).ready(function() {

  $("#consultation__form").submit(function() {

      $.ajax({
       type: "POST",
       url: "mail.php",
       data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('.overlay_thanks, #thanks').fadeIn('slow');
          $("#consultation__form").trigger("reset");
});
  return false;
});
});