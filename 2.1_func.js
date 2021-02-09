let country;
let population;
let capitalCity;
function describeCountry(country,population,capitalCity){
    let info = country +' has ' +
    population+ ' people and its capital city is '+capitalCity;
    return info;
    
}
let result1 = describeCountry('Ukraine', '48 million','Kyiv');
console.log(result1);
let result2 = describeCountry('Canada', '38 million','	Ottawa');
console.log(result2);
let result3 = describeCountry('Brazil', '210 million','	Brasília');
console.log(result3);
