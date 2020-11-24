function showDestructureObject(){
    const student = {name: 'Chris', address: '123 Oak Avenue'}
    const classGrade = {
        ...student,
        marks: [7,8,6], grade: 7 }

    const {name, grade, ...rest} = classGrade
    console.log('name is', name)
    console.log('grade is', grade)
    console.log('rest is', rest)
}

showDestructureObject()
