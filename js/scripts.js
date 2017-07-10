$(document).ready(function() {
  $("#food").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1","item2","item3", "item4"];
    groceries.forEach(function(grocery){
      var shopList = $("input#" + grocery).val()
      $("#listItem").prepend("<li>" + shopList + "</li>");
      });
    $("#return").show();
  });
});
