{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj)
    }

    const person = {
        name: "Asef ",
        age: 24,
        email: " asef@gmail.com"
    }

    console.log(validateKeys(person, ["name", "age"]))

}