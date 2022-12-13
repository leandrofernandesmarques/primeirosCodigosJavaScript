console.log ("Atribuicão de variáveis");

const idade = 43;
//Variável const não pode ser mudada ou sobrescrita
let primeiroNome = "Leandro";

const sobrenome = "Marques";

//Formas de concatenação
console.log (primeiroNome, sobrenome);
console.log (primeiroNome + " " + sobrenome);

// melhor forma
console.log ( `Meu nome é ${primeiroNome} ${sobrenome}`);

//Usando o let na variável podemos mudá-la
primeiroNome = primeiroNome + " " + sobrenome;
console.log(primeiroNome);

//O JS é fracamente tipada
primeiroNome = 2;
console.log(primeiroNome);

/* Boas práticas: Utilizar constant e não ficar
mudando tipo de variável */

primeiroNome = "Leandro";
primeiroNome = primeiroNome + " " + sobrenome;
console.log (primeiroNome);

//Para contadores e iteradores utilize o let
let contador = 0;
contador = contador + 1;
console.log (contador);