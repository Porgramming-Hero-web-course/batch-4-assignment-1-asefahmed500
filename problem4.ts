{
    type Circle = { shape: "circle", radius: number };
    type Rectangle = { shape: "rectangle"; width: number; height: number };

    function calculateShapeArea(shape: Circle | Rectangle): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;

        }
        else {

            return shape.width * shape.height;

        }

    }

    const result1 = calculateShapeArea({ shape: "circle", radius: 6 })
    console.log(result1)
    const result2 = calculateShapeArea({ shape: "rectangle" , width: 8, height: 9 })
    console.log(result2)





}