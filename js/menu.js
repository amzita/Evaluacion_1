function menu(){
  let componente = `
  
  <a href="./inicio.html"> <button> <img class="icono" src="https://cdn-icons-png.flaticon.com/512/39/39563.png" alt=""></button></a>
  `;

  let menu_del_dom = document.querySelector(".menu")

  menu_del_dom.innerHTML= componente

}
menu();