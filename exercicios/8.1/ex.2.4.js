function wheresX (string) {
    const paramString = `Tryber x aqui!

    Tudo bem?`
    return paramString.replace('x', string)
}

const stringSkills = [' Fluent English', ' Assertive Communication', ' Logical Thinking', ' Dynamism',' Hard Work']

const firstStr = wheresX("Wally");
function newString(str) {
    return `${str}
            
${stringSkills.sort()}`
}
console.log(newString(firstStr));