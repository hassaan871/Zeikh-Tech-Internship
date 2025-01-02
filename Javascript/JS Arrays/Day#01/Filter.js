const ages = [16, 22, 24, 50, 18, 17, 14, 33, 11];

const checkAdult = (age) =>{
    return age>18
}

const filter = ages.filter(checkAdult);
console.log(filter);
