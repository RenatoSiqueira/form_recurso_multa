$(document).ready(function() {
    $('#estado').hide();
    $('#esfera').change(function() {
      if ($('#esfera').val() == 2) {
        $('#estado').show();
      } else {
        $('#estado').hide();
      }
    });
  });