class employee{
    constructor(name){
        this.name = name;
        console.log("Employee, ",name);
    }    
    function info(){
        console.log("Employee here");
    }
}

class manager extends employee{
    constructor(name){
        super(name);
        console.log("Manager here");
        super.info();
    }
    info(){
        console.log("Manager, here");
    }

}

const hey = new manager();

hey.info();