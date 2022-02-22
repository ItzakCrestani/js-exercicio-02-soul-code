let numberOfNumbers = parseFloat(
  prompt('Digite a quantidade de números que deseja somar:')
)

let numbers = []
let addiction = 0

for (let i = 1; i <= numberOfNumbers; i++) {
  let number = parseFloat(prompt(`Digite o ${i}° número:`))
  numbers.push(number)
  addiction += number

  document.write(
    `<p>A potência de 2 do número ${number} é: ${Math.pow(number, 2)}</p><br>`
  )
  document.write(
    `<p>A raiz quadrada do número ${number} é: ${Math.sqrt(number)}</p><br>`
  )
  document.write(
    `<p>A raiz cúbica do número ${number} é: ${Math.cbrt(number)}</p><br>`
  )
}

document.write(`<p>A soma total dos números digitados é: ${addiction}</p><br>`)
document.write(
  `<p>A média de todos os números digitados é: ${
    addiction / numbers.length
  }</p><br>`
)
