
function tellFortune(jobTitle,location,partnerName,numberOfChildren){
    let result = `You will be a ${jobTitle} in ${location} and married to
    ${partnerName} with ${numberOfChildren} children`;
    return result;
}
let resultFortune = tellFortune('someJob','place','someGirl','6');
console.log(resultFortune);
