// Name - Diya Diya
// Student number - 200489015
// Course - COMP1073 Client-Side JavaScript
// Assignment - 4

//Creating a constructor function with two parameters - ingredients and price
class Smoothie{
    constructor(ingredients, price){
        this.ingredients = ingredients;
        this.price = price;
    }
}

//Creating array to store the names and price of various ingredients
var ingredients = [
    {name : "Strawberry" , price : 3.00},
    {name : "Berries" , price : 3.00},
    {name : "Green Leaf" , price : 3.00},
    {name : "Cholocate" , price : 3.00},
    {name : "Banana" , price : 3.00},
    {name : "French vanilla" , price : 2.50},
    {name : "Fruit juice" , price : 2.50},
    {name : "Flavoured syrup", price : 1.50}
];

//creating a checkbox in front of every ingredient so that the customer can select it
if(document.getElementsByClassName("main").length!==0){
    var Input = document.getElementById("Inputs");
    for(var i = 0; i < ingredients.length;i++){
        var element = document.createElement('input');
        var label = document.createElement('label');
        element.type = "checkbox";
        element.className = "Ingredient";
        element.id = ingredients[i].name
        element.value = `${ingredients[i].name}`;
        label.htmlFor = element.id;
        label.appendChild(document.createTextNode(`${ingredients[i].name} :- $${ingredients[i].price}`))
        Input.appendChild(element);
        Input.appendChild(label);
    }

    //creating a function for the onclick event of orderBtn and to take the order from the user
    document.getElementById("orderBtn").onclick = function(){
            var Ingredients = document.getElementsByClassName("Ingredient");
            var SelectedIngredients=[];
            var price=0
            for(var i=0;i<Ingredients.length;i++){
                if(Ingredients[i].checked){  
                    SelectedIngredients[SelectedIngredients.length]=Ingredients[i].value;
                    if(ingredients[i].name === Ingredients[i].value){
                        price += ingredients[i].price;
                    }
                }
            }
            //check if any ingredient is selected or not, otherwise pop-up an alert message
            if(SelectedIngredients.length!==0){
                var smoothie = new Smoothie(SelectedIngredients,price);
                localStorage.setItem("orderedIngredient",JSON.stringify(smoothie.ingredients));
                localStorage.setItem("orderBill",JSON.stringify(smoothie.price));
                window.location="./confirmation.html";
            }else{
                alert("Please select ingredients");
            }
    }
}

//if statement which helps us to represent the total value of the order placed
if(document.getElementsByClassName("confirmation").length!==0){
    document.getElementById("ingredients_selected").innerHTML = `Selected Ingredients = ${JSON.parse(localStorage.getItem("orderedIngredient"))}`;
    document.getElementById("bill").innerHTML = `Total Amount = $${JSON.parse(localStorage.getItem("orderBill"))}`;
}
