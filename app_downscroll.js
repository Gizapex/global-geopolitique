console.log

$(document).ready(function () {
  // Initialize Select2 on the dropdown list
  $('#countrySelector').select2();

  // Hide all content divs except the one for the initially selected country
  $('.content').hide();

  // Get the selected option's text and show the associated div
  $('#countrySelector').on('change', function() {
    var selectedCountry = $(this).val();
    
    // Hide all content divs
    $('.content').hide();
    
    // Show the associated div
    $('.content[data-country="' + selectedCountry + '"]').show();
  });
});