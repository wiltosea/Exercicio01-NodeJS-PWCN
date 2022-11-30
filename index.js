const prompt = require('prompt');

var schema = {
  properties: {
    name: {
      required: true,
    },
    sobrenome: {
      required: true,
    },
    cpf: {
      pattern: /^[0-9\-]{11}$/,
      message:
        'Precisa ter exatamente 11 digitos, se preciso, adicione zeros no início.',
      length: 11,
    },
    mail: {
      pattern:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Precisa ser um endereço de email válido',
      required: true,
    },
  },
};

prompt.start();

prompt.get(schema, function (_, result) {
  console.log(`nome: ${result.name} ${result.sobrenome} `);
  console.log(`email: ${result.mail}`);
  console.log(`CPF: ${result.cpf}`);
});
