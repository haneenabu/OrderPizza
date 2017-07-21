function PizzaOrder(sauce, size, topping, side){
  this.pSauce= sauce;
  this.pSize= size;
  this.pTopping = topping;
  this.pSide = side;
}
PizzaOrder.prototype.pizzaCost = function() {
  var total = (this.pSize + this.pTopping + this.pSide);
  return total;
}

$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    var sauce = $("#pizza").val();
    var size = parseInt($("input:radio[name=size]:checked").val());
    var side = parseInt($("input:radio[name=side]:checked").val());
    var toppings=0;
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings += parseInt($(this).val());
    });

    var newPizza = new PizzaOrder(sauce, size, toppings, side);
    console.log(newPizza);

    $(".receipt").show();
    $("#pizzaStyle").text(sauce);
    $("#cost").text(newPizza.pizzaCost());


    event.preventDefault();
  });
});
