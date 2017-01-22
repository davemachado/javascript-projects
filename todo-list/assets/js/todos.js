$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  // check if Enter key was pressed (13)
  if(event.which === 13) {
    var newText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + newText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
