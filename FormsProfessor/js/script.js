//_______________________________________________________________________________
//VALIDAÇÃO DATA

function validarIdade() {
  const dataNascimento = document.getElementById("datanascimento").value;
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  const idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  // Verifica se a idade é maior ou igual a 18 anos
  if (idade < 18 || (idade === 18 && mes < 0)) {
    document.getElementById("erroIdade").style.display = "inline";
    document
      .getElementById("datanascimento")
      .setCustomValidity("Você deve ter mais de 18 anos.");
  } else {
    document.getElementById("erroIdade").style.display = "none";
    document.getElementById("datanascimento").setCustomValidity(""); // Limpa a validação
  }
}

//_______________________________________________________________________________
//VALIDAÇÃO RG
// Validação para garantir que apenas números sejam digitados no campo RG
document.getElementById("rg").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Substitui qualquer caractere não numérico por nada
});

//_________________________________________________________________________________
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

//TELEFONE
//___________________________________________________________________________

// Função para formatar o telefone enquanto o usuário digita
document.getElementById("telefone").addEventListener("input", function (e) {
  var telefone = e.target.value;

  // Remove caracteres não numéricos
  telefone = telefone.replace(/\D/g, "");

  // Aplica a formatação do telefone
  if (telefone.length <= 2) {
    telefone = "(" + telefone;
  } else if (telefone.length <= 6) {
    telefone = "(" + telefone.slice(0, 2) + ") " + telefone.slice(2);
  } else if (telefone.length <= 10) {
    telefone =
      "(" +
      telefone.slice(0, 2) +
      ") " +
      telefone.slice(2, 7) +
      "-" +
      telefone.slice(7);
  } else {
    telefone =
      "(" +
      telefone.slice(0, 2) +
      ") " +
      telefone.slice(2, 7) +
      "-" +
      telefone.slice(7, 11);
  }

  // Atualiza o campo com a formatação
  e.target.value = telefone;

  // Valida o telefone
  var telefoneError = document.getElementById("telefoneError");
  if (telefone.length === 15) {
    telefoneError.style.display = "none"; // Oculta a mensagem de erro
  } else {
    telefoneError.style.display = "block"; // Exibe a mensagem de erro
  }
});

//VALIDAR CEP
//_____________________________________________________________________
// Função para formatar o CEP enquanto o usuário digita
document.getElementById("cep").addEventListener("input", function (e) {
  var cep = e.target.value;

  // Remove caracteres não numéricos
  cep = cep.replace(/\D/g, "");

  // Aplica a formatação do CEP (XXXXX-XXX)
  if (cep.length <= 5) {
    cep = cep.slice(0, 5);
  } else {
    cep = cep.slice(0, 5) + "-" + cep.slice(5, 8);
  }

  // Atualiza o campo com a formatação
  e.target.value = cep;

  // Valida o CEP
  var cepError = document.getElementById("cepError");
  if (cep.length === 10) {
    cepError.style.display = "none"; // Oculta a mensagem de erro
  } else {
    cepError.style.display = "block"; // Exibe a mensagem de erro
  }
});

// VALIDAÇÃO EMAIL
//_________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  // Função de validação de e-mail
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para validar e-mails
    return emailRegex.test(email);
  };

  // Evento de validação
  emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  });

  // Validar ao enviar o formulário
  const form = document.querySelector("#cadastro");
  form.addEventListener("submit", (e) => {
    if (!validateEmail(emailInput.value.trim())) {
      e.preventDefault();
      emailError.style.display = "block";
    }
  });
});

//PRETENSÃO SALARIAL

function atualizaValor(valor) {
  const valorFormatado = parseFloat(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.getElementById("valorSalarial").textContent = valorFormatado;
}
