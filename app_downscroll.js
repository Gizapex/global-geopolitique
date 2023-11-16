console.log

$(document).ready(function () {
  $('#countrySelector').select2();

  $('.content').hide();

  $('#countrySelector').on('change', function() {
    var selectedCountry = $(this).val();

    $('.content').hide();

    $('.content[data-country="' + selectedCountry + '"]').show();
  });
});