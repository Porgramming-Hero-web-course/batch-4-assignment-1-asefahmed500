{

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;

        }
        getCarAge(currentyear: number = new Date().getFullYear()): {age : number ,currentyear : number } {
            return {
                
                age: currentyear - this.year ,
                currentyear :currentyear
            };

        }



    }

    const result = new Car("Honda" , "Civic" , 2018);
    console.log(` ${result.getCarAge().age} assuming current year is ${result.getCarAge().currentyear}`)

}