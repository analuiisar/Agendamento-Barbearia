
// JavaScript para input select //
document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('corte');

  if (select) {
    // Aplica classe logo no carregamento, caso tenha valor já selecionado
    if (select.value !== "") {
      select.classList.add('selecionado');
    }

    select.addEventListener('change', function () {
      if (this.value === "") {
        this.classList.remove('selecionado');
      }
      else {
        this.classList.add('selecionado');
      }
    });
  }
});

// JavaScript Tabela 

const formulario = document.getElementById('formulario');
const tabela = document.getElementById('tabela').querySelector('tbody');
const agenda = [];

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nome = document.getElementById('Nome').value;
  const telefone = document.getElementById('Telefone').value;
  const email = document.getElementById('Email').value;
  const corte = document.getElementById('corte').value;
  const data = document.getElementById('Data').value;
  const horario = document.getElementById('Horário').value;

  if (corte === "Buzz Cut") {
    console.log(nome + " escolheu corte Buzz Cut.");
  } else if (corte === "Fade/Degradê") {
    console.log(nome + " escolheu corte Fade/Degradê");
  } else if (corte === "Mullet Moderno") {
    console.log(nome + " escolheu o corte Mullet Moderno");
  } else if (corte === "Old Money") {
    console.log(nome + " escolheu o corte Old Money");
  }

  const agendamento = { nome, telefone, email, corte, data, horario };

  let conflito = false;
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].data === data && agenda[i].horario === horario) {
      conflito = true;
      break;
    }
  }

  if (conflito) {
    alert("Já existe um agendamento nesta data e horário.");
    return;
  } else {
    agenda.push(agendamento);
  }

  tabela.innerHTML = "";
  for (let i = 0; i < agenda.length; i++) {
    const linha = tabela.insertRow();
    linha.insertCell(0).textContent = agenda[i].nome;
    linha.insertCell(1).textContent = agenda[i].telefone;
    linha.insertCell(2).textContent = agenda[i].email;
    linha.insertCell(3).textContent = agenda[i].corte;
    linha.insertCell(4).textContent = agenda[i].data;
    linha.insertCell(5).textContent = agenda[i].horario;
  }

  // Limpar formulário
  formulario.reset();
});
