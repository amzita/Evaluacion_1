function seccion(){
    let componentes =
    
           `<div class="inicio">
            <h3><a href="./home.html">home</a></h3>
            <h3><a href="./abount.html">abount</a></h3>
            <h3><a href="./contact.html">contact</a></h3>
        </div>
    <div class="buton1"> <p>Log in</p> </div>
    <div class="buton1"> <p>Sing up</p> </div>`;

  let menu_pr = document.querySelector(".chimmy");
  menu_pr.innerHTML = componentes;
}
seccion();