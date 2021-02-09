const averegeScore = function(num1,num2,num3){
return (num1+num2+num3)/3;
}
let johnsTeam = averegeScore(130,120,103);
let mikesTeam = averegeScore(116,94,123);
if (johnsTeam>mikesTeam){
   console.log('Jons Team is win');

}else if (johnsTeam<mikesTeam){
    console.log('Mikes Team is win');
}
else {
    console.log('There is a draw');
}