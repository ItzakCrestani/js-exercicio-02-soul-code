let binaryNumber = prompt(
  `Digite aqui um número binário (apenas 0 e 1) para convertermos ele em decimal:`
)

function binaryToDecimal(binaryNumber) {
  let decimal = 0,
    i = 0,
    remnant

  while (binaryNumber != 0) {
    remnant = binaryNumber % 10
    binaryNumber = Number.parseInt(binaryNumber / 10)
    decimal += remnant * Math.pow(2, i)
    ++i
  }

  return decimal
}

decimal = binaryToDecimal(binaryNumber)

document.write(
  `O valor binário digitado convertido para decimal fica: ${decimal}`
)
