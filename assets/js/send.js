$(document).ready(function() {

  $("#consultation_form").submit(function() {

      $.ajax({
       type: "POST",
       url: "mail.php",
       data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('.overlay_thanks, #thanks').fadeIn('slow');
          $("#consultation_form").trigger("reset");
});
  return false;
});
});