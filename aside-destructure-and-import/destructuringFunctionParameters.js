function testDestructuringForFunctions({name, grade, ...rest}, [first, second, ...otherValues])
{
    console.log('name is', name)
    console.log('grade is', grade)
    console.log('rest is', rest)

    console.log()

    console.log('first', first)
    console.log('second', second)
    console.log('otherValues', otherValues)
}

const student = {name: 'name', grade: 7, marks: [8,7,6]}
const numbers = [1,2,3,4]

testDestructuringForFunctions(student, numbers)
