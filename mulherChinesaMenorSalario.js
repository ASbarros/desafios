//mulher chinesa com o menor salario...

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json',
    axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    let menor,
        index

    const chines = funcionarios.filter(eChina),
        mulheresChinesas = chines.filter(eMulher)

    mulheresChinesas.forEach((el, i) => {
        if (i == 0) {
            menor = el.salario
            index = 0
        } else if (menor > el.salario) {
            menor = el.salario
            index = i
        }
    })
    console.log(mulheresChinesas[index])
})

const eChina = el => el.pais == 'China' || el.pais == 'china' || el.pais == 'CHINA',
    eMulher = el => el.genero == 'F'