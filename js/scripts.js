$(document).ready(function() {
  $(".test").submit(function(event) {
    event.preventDefault();

    var warningCount = 0;
    $("input:checkbox[name=warning]:checked").each(function() {
      var stressors = parseInt($(this).val());
      warningCount += stressors;
    });
    var symptomCount = 0;
    $("input:checkbox[name=symptom]:checked").each(function() {
      var stressors = parseInt($(this).val());
      symptomCount += stressors;
    });
    var copeCount = 0;
    $("input:checkbox[name=cope]:checked").each(function() {
      var stressors = parseInt($(this).val());
      copeCount += stressors;
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
