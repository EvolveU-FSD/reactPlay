function showDestructureArray(){
    const firstTwo = [1,2]
    const anArray = [...firstTwo, 3,4]

    const [first, second, ...rest] = anArray
    console.log('first is', first)
    console.log('second is', second)
    console.log('rest is', rest)
}

showDestructureArray()