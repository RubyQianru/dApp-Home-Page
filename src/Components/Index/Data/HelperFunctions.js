function addComma(input) {
    let index = input.toString().length - 1
    input = input.toString()
    index += 1
    while(index > 3){
      index -= 3
      if (input[index] != '.'){
        input = input.slice(0, index) + ',' + input.slice(index)
      }
    }
    return input
  }

function nameCleanup(input){
    let index = 0
    let res = ""
    while (input[index] != '-'){
        index ++
    }
    index++
    while (index < input.length){
        res += input[index]
        index ++
    }
    return res[0].toUpperCase() + res.slice(1)
}

export {addComma, nameCleanup}