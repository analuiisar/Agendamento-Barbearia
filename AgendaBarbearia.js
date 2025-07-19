
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