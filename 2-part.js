let text = prompt('Digite um texto qualquer:')

alert(`Seu texto em letras maiúsculas: ${text.toUpperCase()}`)

alert(`Seu texto em letras minúsculas: ${text.toLowerCase()}`)

alert(
  `Agora abra seu DevTools, na aba "Console", para ver como fica seu texto separado caractere por caractere.`
)

console.log(text.split(''))
