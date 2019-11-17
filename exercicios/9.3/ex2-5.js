async function promise() {

    const tenRandom = () => {
      const newArray = [];
      for (let i = 0 ; i < 10 ; i++) {
        let randomOne = Math.pow(Math.floor(Math.random()*50) + 1, 2)
        newArray.push(randomOne)
      }
      return newArray
    }

    const newNumber = tenRandom().reduce((acc, random) => acc += random, 0)
    // console.log(newNumber)

    if (newNumber < 8000) {return newNumber} else {throw 'É mais de 8000! Essa promise deve ser quebrada.'}

}

async function theSumPromise(number) {
    const theNewArray = [number / 2, number / 3 , number / 5, number / 10]
    const yetAnotherArraySum = theNewArray.reduce((acc, element) => acc += element, 0)

    if (yetAnotherArraySum === undefined) {throw 'Array mal resolvido'} else {return yetAnotherArraySum}
    // console.log(theNewArray)
    // console.log(yetAnotherArraySum)
  }

async function numbersResults() {
  try {
    const number = await promise
    const result = await theSumPromise(number)
    console.log(result)
  }
  catch(e) {
    console.log(e.message)
  }
}

(async () => {
  await numbersResults();
})()