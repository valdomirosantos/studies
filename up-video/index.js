const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Qual o termo de busca na Wikipedia: ')
   }

   function askReturnPrefix() {
       const prefixes = ['Quem e', 'O que e', 'A historia de', 'Quem foi', 'Os feitos de', 'Saiba mais sobre']
       const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma das opcoes:')
       const selectedPrefixText = prefixes[selectedPrefixIndex]

       return selectedPrefixText
   }

    console.log(content)
}

start()