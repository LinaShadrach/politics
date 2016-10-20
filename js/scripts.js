$(document).ready(function() {

  $("#survey form").submit(function(event){

    var gender = $("input:radio[name=gender]:checked").val();
    var rights = $("input:radio[name=rights]:checked").val();
    var citizen = $("input:radio[name=citizen]:checked").val();
    var education = $("input:radio[name=education]:checked").val();
    var tax = $("input:radio[name=tax]:checked").val();

    var trump = 0;
    var clinton = 0;

    if (gender === "yes") {
      clinton += 1;

    } else{
      trump += 1;
    }
    if (rights === "yes") {
      clinton += 1;
    } else{
      trump += 1;
    }
    if (citizen === "yes") {
      clinton += 1;
    } else{
      trump += 1;
    }
    if (education === "yes") {
      clinton += 1;
    } else{
      trump += 1;
    }
    if (tax === "yes") {
      clinton += 1;
    } else{
      trump += 1;
    }

    $(".trump").text(trump);
    $(".clinton").text(clinton);

  event.preventDefault();
  });
});
