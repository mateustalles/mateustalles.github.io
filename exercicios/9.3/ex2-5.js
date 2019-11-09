const promise = new Promise ((resolve, reject) => {
  const tenRandom = () => {
    const newArray = [];
    for (let i = 0 ; i < 10 ; i++) {
      let randomOne = Math.pow(Math.floor(Math.random()*50) + 1, 2)
      newArray.push(randomOne)
    }
    return newArray
  }
  const sumOfAllRandoms = () => tenRandom().reduce((acc, random) => acc += random)

  const theComparator = (what) => {
    const newNumber = what()
    console.log(newNumber)
    newNumber < 8000 ? resolve(newNumber) : reject('Not this time...')
  }
  theComparator(sumOfAllRandoms)
})


promise
  .then (number => console.log([number / 2, number / 3 , number / 5, number / 10]))
  .catch (message => console.log(message))