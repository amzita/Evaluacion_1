function cajas(){
    let main = document.querySelector(".main");
    for (let i=0; i <= 10; i++ ){
        let div = document.createElement("div")
            div.innerHTML = `<div class="caja">
            <h1 class="titulo2">Check while producto</h1>
              <div class="imagen">
              <img class="imagen2" src="https://i.pinimg.com/564x/a4/24/89/a42489e7ae2a7254122501ebf29db744.jpg" alt="">
              </div>
              <p class="texto2">new product</p>
          </div>`;
            main.appendChild(div);
        }
      }
    cajas();