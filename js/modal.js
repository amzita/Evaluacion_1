function footer(){
    let componetes = ` <img class="tata" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Farte-vectorial%2F638540-alinear-texto-centro-icono-signo-ilustracion&psig=AOvVaw1aO6B6WUbuSYGlMOcw2at4&ust=1682378289944000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNipxdSRwf4CFQAAAAAdAAAAABBl" alt="">
    
    <a href="./index.html"><button>
        <h3>Home</h3>
    </button></a>
    <a href="./about.html"><button>
        <h3>About</h3>
    </button></a>
    <a href="./contact.html"><button>
        <h3>Contact</h3>
    </button></a>`;

    let menu_del_dom2 = document.querySelector(".pagina")

    menu_del_dom2.innerHTML= componetes
}
footer();