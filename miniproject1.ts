class Students {
    name: String;
    age: Number;
    gender: String;
    nationality: String;

    constructor(name:String, age:Number, nationality:String){
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
    }

    getNationality(): void {
        console.log(this.nationality);
    }
}

class UnderGraduates extends Students implements Iundergrad{
    batch: Number;
    gpa: Number;

    constructor(batch:Number, name:String, age:Number, nationality:String){
        super(name, age, nationality);
        this.batch = batch;
    }

}

interface Iundergrad{
    name: String;
    age: Number;
    gender: String;
    nationality: String;
    batch: Number;
    gpa: Number;
}

const ug: UnderGraduates = new UnderGraduates(123456, "Nicolas Fracchia", 32, "Argentinian");
ug.getNationality();