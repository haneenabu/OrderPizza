function PizzaOrder(sauce, size, topping, side){
  this.pSauce= sauce;
  this.pSize= size;
  this.pTopping = topping;
  this.pSide = side;
  this.finalCost =0;
}
PizzaOrder.prototype.pizzaCost = function() {
  var total = (this.pSize + this.pTopping + this.pSide);
  return total;
}
$(document).ready(function(){
  $("#add-pizza").click(function(){
    $('input[type=checkbox]').each(function() {this.checked=false});
  });
  var total =[];
  $("#pizzaForm").submit(function(event){
    var sauce = $("#pizza").val();
    var size = parseInt($("input:radio[name=size]:checked").val());
    var side = parseInt($("input:radio[name=side]:checked").val());
    var toppings=0;
    var finalPrice =0;
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings += parseInt($(this).val());
    });
    var newPizza = new PizzaOrder(sauce, size, toppings, side);
    total.push(newPizza.pizzaCost());
    for(var i=0; i< total.length;i++){
      finalPrice += total[i];
    }
    $(".receipt").fadeIn(2000);
    $("#pizzaStyle").text(sauce);
    $("#cost").text(finalPrice);
    $('ul#morePizza').append('<li><h3><span class="pizza">'+ 'Pizza Cost: $' + newPizza.pizzaCost() + "</span></h3></li>");
    event.preventDefault();
  });
});
