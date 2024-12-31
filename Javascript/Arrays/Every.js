const ages = [18,19,22,25];
// const ages = [17,18,19,16,22,25];

function isAdult(age){
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

const allAdults = ages.every(isAdult);
console.log(allAdults);
