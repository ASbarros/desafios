//mulher chinesa com o menor salario...

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json',
    axios = require('axios'),
    eChina = el => el.pais == 'China' || el.pais == 'china' || el.pais == 'CHINA',
    eMulher = el => el.genero == 'F',
    menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual;
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(eChina).filter(eMulher).reduce(menorSalario));
})