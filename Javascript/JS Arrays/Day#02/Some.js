const ages = [7, 17, 18, 22, 29, 16];

const isAdult = ages.some((age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
})

console.log(isAdult);
