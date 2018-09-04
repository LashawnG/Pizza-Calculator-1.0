//Lashawn van der Graaf A1
//Pizza Calculator 1.0

//Pizza prijzen
const small = 4;
const med = 5;
const large = 6;

//Variables
var total = 0;
var pizza1 = prompt("Hoeveel Small pizzas wilt u voor 4 euro per stuk?");
var pizza2 = prompt("Hoeveel Medium pizzas wilt u voor 5 euro per stuk?");
var pizza3 = prompt("Hoeveel Large pizzas wilt u voor 6 euro per stuk?");


//Small pizzas
document.write("Aantal small pizzas: ", pizza1,"<br>"); //Laat het aantal gekozen soort pizza zien
document.write("Totaal: ", small * pizza1, " Euro"); //Laat het totaal bedrag zien voor de aantal gekozen soort pizza


//Medium pizzas
document.write("<br>","Aantal medium pizzas: ", pizza2,"<br>");
document.write("Totaal: ", med * pizza2, " Euro");


//Large pizzas
document.write("<br>","Aantal large pizzas: ", pizza3,"<br>");
document.write("Totaal: ", large * pizza3, " Euro");


//Totaal
total = (small * pizza1) + (med * pizza2) + (large * pizza3); //Telt alles bij elkaar op
document.write("<br>","Het totaal bedrag voor alle pizzas komt uit op: ",total," euro");






