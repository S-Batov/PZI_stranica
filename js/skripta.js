window.onload=function(){
    //dohvati cart
   let cart = document.getElementById("shopping-card");
   //dodaj event za cart
   cart.addEventListener("click", handlerCart);


   //dohvati botune
   let botuni = document.getElementsByClassName("pizza-button");
   let btns = [];
   //za svaki botun dodaj handler
   for(let i = 0; i < botuni.length; i++){
       if(botuni[i].parentElement.className == "pizza-card"){
            btns[i] = botuni[i];
            btns[i].addEventListener("click", handleButtonCount);
       }
   }
}

//handler za klik na cart
function handlerCart() {
  let elem = document.getElementById("shopping-side-menu");
  elem.classList.toggle("active");
}

//inkrementiranje broja kraj kosarice
function inc(evt){
        let elem = document.getElementById("shopping-count");
        let cnt = elem.innerHTML;
        cnt++;
        elem.innerHTML = cnt; 
}

//Napravit objekt
function getNamePrice(evt){
    // let test = evt.currentTarget.parentElement.getElementsByClassName("pizza-name").innerHTML;
    // console.log(test);
    //         // ZASTO OVO NE RADI?
    let objekt = {
        ime: evt.currentTarget.parentElement.children[1].innerHTML,
        cijena: evt.currentTarget.parentElement.children[3].children[0].innerHTML
    }
    return objekt;
}

//dodat u kosaricu
function createNewShopItem(obj){
    let menu = document.getElementById("shopping-side-menu");
    let item = document.createElement("div");
    item.className = "shopping-item";
    menu.appendChild(item);

    //naziv
    let naziv = document.createElement("h3");
    naziv.innerText = obj.ime;
    item.appendChild(naziv);
    //-naziv


    //opis
    let opis = document.createElement("div");
    opis.className = "description";
    //cijena
    let cijena = document.createElement("div");
    cijena.className = "cijena";
    let cijenaSmall = document.createElement("small");
    cijenaSmall.innerText = "Cijena: ";
    let cijenaBroj = document.createElement("p");
    cijenaBroj.innerText = obj.cijena;
    cijena.appendChild(cijenaSmall);
    cijena.appendChild(cijenaBroj);
    
    opis.appendChild(cijena);
    //-cijena

    //kolicina
    let kolicina = document.createElement("div");
    kolicina.className = "kolicina";

    let kolicinaSmall = document.createElement("small");
    kolicinaSmall.innerText = "Kolicina: ";
    let kolicinaBroj = document.createElement("p");
    kolicinaBroj.innerText = "1";

    kolicina.appendChild(kolicinaSmall);
    kolicina.appendChild(kolicinaBroj);

    opis.appendChild(kolicina);
    //-kolicina

    item.appendChild(opis);
    //-opis
}

//handler za botune
function handleButtonCount(evt){
    inc(evt);
    imeCijena = getNamePrice(evt);
    createNewShopItem(imeCijena);
}
