
// JavaScript para input select //
// Escurece a cor do texto quando o corte for selecionado. 
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
const agenda = []; /*criar objeto*/ 

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); /* Impede o botão submit de recarregar a página*/ 

  const nome = document.getElementById('Nome').value;
  const telefone = document.getElementById('Telefone').value;
  const email = document.getElementById('Email').value;
  const corte = document.getElementById('corte').value;
  const data = document.getElementById('Data').value;
  const horario = document.getElementById('Horario').value;


  const agendamento = { nome, telefone, email, corte, data, horario }; /* criar uma lista*/ 

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
