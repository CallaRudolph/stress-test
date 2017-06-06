$(document).ready(function() {
  $(".test").submit(function(event) {
    event.preventDefault();

    var count = 0;
    $("input:checkbox[name=warning]:checked").each(function() {
      var stressors = parseInt($(this).val());
      count += stressors;
    });
    $(".guidance").hide();
    if (count >= 4) {
      $("#rough").show();
    } else {
      $("#good").show();
    }


    // $("#rough").show();
    // $("input:")


  });
});
