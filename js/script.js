// Validação de data de nascimento para garantir que o aluno tenha entre 5 e 18 anos
document
  .getElementById("datanascimento")
  .addEventListener("input", function () {
    const dataNascimento = new Date(this.value);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mes = dataAtual.getMonth() - dataNascimento.getMonth();
    const dia = dataAtual.getDate() - dataNascimento.getDate();

    // Ajusta a idade se a data de nascimento ainda não fez aniversário neste ano
    if (mes < 0 || (mes === 0 && dia < 0)) {
      idade--;
    }

    // Pega o elemento que irá mostrar as regras
    const regras = document.getElementById("regras-datanascimento");

    // Se a idade estiver fora da faixa (menos de 5 anos ou mais de 18 anos), mostra a mensagem de erro
    if (idade < 5) {
      regras.style.display = "block"; // Exibe a mensagem de regras
      regras.innerHTML =
        '<p style="color: red;">A idade mínima para cadastro é 5 anos.</p>';
      this.setCustomValidity("Idade mínima de 5 anos.");
    } else if (idade > 18) {
      regras.style.display = "block"; // Exibe a mensagem de regras
      regras.innerHTML =
        '<p style="color: red;">A idade máxima para cadastro é 18 anos.</p>';
      this.setCustomValidity("Idade máxima de 18 anos.");
    } else {
      regras.style.display = "none"; // Se a idade estiver dentro da faixa, esconde a mensagem
      this.setCustomValidity(""); // Limpa qualquer mensagem de erro
    }
  });

//VALIDAÇÃO CPF

// Validação de data de nascimento para garantir que o aluno tenha entre 5 e 18 anos
document
  .getElementById("datanascimento")
  .addEventListener("input", function () {
    const dataNascimento = new Date(this.value);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mes = dataAtual.getMonth() - dataNascimento.getMonth();
    const dia = dataAtual.getDate() - dataNascimento.getDate();

    // Ajusta a idade se a data de nascimento ainda não fez aniversário neste ano
    if (mes < 0 || (mes === 0 && dia < 0)) {
      idade--;
    }

    // Mostra ou esconde as regras
    const regras = document.getElementById("regras-datanascimento");
    regras.style.display = "block"; // Exibe a mensagem de regras

    // Valida a idade
    if (idade < 5) {
      regras.innerHTML =
        '<p style="color: red;">A idade mínima para cadastro é 5 anos.</p>';
      this.setCustomValidity("Idade mínima de 5 anos.");
    } else if (idade > 18) {
      regras.innerHTML =
        '<p style="color: red;">A idade máxima para cadastro é 18 anos.</p>';
      this.setCustomValidity("Idade máxima de 18 anos.");
    } else {
      regras.innerHTML =
        "<p>Por favor, insira uma data de nascimento entre 5 e 18 anos.</p>";
      this.setCustomValidity(""); // Limpa qualquer mensagem de erro
    }
  });

//VALIDAR CPF

// Formatar CPF enquanto o usuário digita
document.getElementById("cpf").addEventListener("input", function (e) {
  let cpf = e.target.value;

  // Remove tudo que não for número
  cpf = cpf.replace(/\D/g, "");

  // Limita o tamanho do CPF a 11 dígitos
  if (cpf.length > 11) {
    cpf = cpf.slice(0, 11);
  }

  // Formata o CPF
  if (cpf.length <= 3) {
    cpf = cpf.replace(/(\d{1,3})/, "$1");
  } else if (cpf.length <= 6) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  } else if (cpf.length <= 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  }

  // Atualiza o valor do campo com o CPF formatado
  e.target.value = cpf;
});

// Validação do CPF
document.getElementById("cpf").addEventListener("blur", function () {
  const cpf = this.value.replace(/\D/g, "");
  if (cpf.length === 11 && !validarCPF(cpf)) {
    alert("CPF inválido.");
  }
});

// Função para validar o CPF
// Função para validar o CPF
document.getElementById("cpf").addEventListener("input", function () {
  var cpf = this.value;
  var cpfError = document.getElementById("cpfError");

  // Remove qualquer caractere não numérico para verificar o formato
  cpf = cpf.replace(/\D/g, "");

  // Validação de CPF
  if (cpf.length === 11 && isValidCPF(cpf)) {
    cpfError.style.display = "none"; // Oculta a mensagem de erro
  } else {
    cpfError.style.display = "block"; // Exibe a mensagem de erro
  }
});

// Função para validar CPF (usando o algoritmo básico de CPF)
function isValidCPF(cpf) {
  // Verifica se o CPF é um número válido
  if (!cpf || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; // CPF inválido
  }

  var sum = 0;
  var rest;

  // Validação do primeiro dígito verificador
  for (var i = 1; i <= 9; i++) {
    sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cpf.charAt(9))) {
    return false;
  }

  sum = 0;
  // Validação do segundo dígito verificador
  for (var i = 1; i <= 10; i++) {
    sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  return rest === parseInt(cpf.charAt(10));
}

//VALIDAÇÃO RG

// Validação para garantir que apenas números sejam digitados no campo RG
document.getElementById("rg").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Substitui qualquer caractere não numérico por nada
});
