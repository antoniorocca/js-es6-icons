$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family

 class Icon {
   constructor(name, prefix, type, family) {
     this.name = name;
     this.prefix = prefix; 
     this.type = type;
     this.family = family
    }
  }

 const icons = [
   new Icon("cat", "fas", "fa-cat", "animals"), //<i class="fas fa-cat"></i>
   new Icon("crow", "fas", "fa-crow", "animals"), //<i class="fas fa-crow"></i>
   new Icon("dog", "fas", "fa-dog", "animals"), //<i class="fas fa-dog"></i>
   new Icon("dove", "fas", "fa-dove", "animals"), //<i class="fas fa-dove"></i>
   new Icon("dragon", "fas", "fa-dragon", "animals"), //<i class="fas fa-dragon"></i>
   new Icon("horse", "fas", "fa-horse", "animals"), //<i class="fas fa-horse"></i>
   new Icon("hippo", "fas", "fa-hippo", "animals"), //<i class="fas fa-hippo"></i>
   new Icon("fish", "fas", "fa-fish", "animals"), //<i class="fas fa-fish"></i>
   new Icon("carrot", "fas", "fa-carrot", "fruits-vegetables"), //<i class="fas fa-carrot"></i>
   new Icon("apple-alt", "fas", "fa-apple-alt", "fruits-vegetables"), //<i class="fas fa-apple-alt"></i>
   new Icon("lemon", "fas", "fa-lemon", "fruits-vegetables"), //<i class="fas fa-lemon"></i>
   new Icon("pepper-hot", "fas", "fa-pepper-hot", "fruits-vegetables"), //<i class="fas fa-pepper-hot"></i>
   new Icon("user-astronaut", "fas", "fa-user-astronaut", "users"), //<i class="fas fa-user-astronaut"></i>
   new Icon("user-graduate", "fas", "fa-user-graduate", "users"), //<i class="fas fa-user-graduate"></i>
   new Icon("user-ninja", "fas", "fa-user-ninja", "users"), //<i class="fas fa-user-ninja"></i>
   new Icon("user-secret", "fas", "fa-user-secret", "users") //<i class="fas fa-user-secret"></i>
 ];

 // Selezioniamo il container icons

 const container = document.querySelector('.icons');

 //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
 
 icons.forEach(Icon => {
   const markup = `
     <div>
       <i class="${Icon.prefix} ${Icon.type}" style="color:black"></i>
       <div class="title">${Icon.name}</div>
     </div>
   `;
   container.insertAdjacentHTML('beforeend', markup);
 })
});

/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup