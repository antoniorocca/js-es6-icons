$(document).ready(function () {
  // icone come da milestone 1
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
    new Icon("carrot", "fas", "fa-carrot", "fruits-vegetables"),   //<i class="fas fa-carrot"></i>
    new Icon("apple-alt", "fas", "fa-apple-alt", "fruits-vegetables"), //<i class="fas fa-apple-alt"></i>
    new Icon("lemon", "fas", "fa-lemon", "fruits-vegetables"), //<i class="fas fa-lemon"></i>  
    new Icon("pepper-hot", "fas", "fa-pepper-hot", "fruits-vegetables"), //<i class="fas fa-pepper-hot"></i>  
    new Icon("user-astronaut", "fas", "fa-user-astronaut", "users"), //<i class="fas fa-user-astronaut"></i>
    new Icon("user-graduate", "fas", "fa-user-graduate", "users"), //<i class="fas fa-user-graduate"></i>
    new Icon("user-ninja", "fas", "fa-user-ninja", "users"), //<i class="fas fa-user-ninja"></i>
    new Icon("user-secret", "fas", "fa-user-secret", "users") //<i class="fas fa-user-secret"></i>  
  ];
   
  // colori come da milestone 2
  //aggiungiamo dei colori come da milestone 2   
  //inseriamo le icone nel container come da milestone 2
  const iconsColor = icons.map(Icon => {
    if(Icon.family === 'animals') {
      var color = 'blue';
    } else if (Icon.family === 'fruits-vegetables'){
      var color = 'orange'; 
    } else {
      var color = 'purple';
    }
    let colorIcon = {...Icon, color: color};

    return colorIcon;      
  });

  const container = document.querySelector('.icons');

  iconsColor.forEach(Icon => {
    const markup = `
      <div>
        <i class="${Icon.prefix} ${Icon.type}" style="color:${Icon.color}"></i>
        <div class="title">${Icon.name}</div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });

  //estrapoliamo i tipi di icone
  //aggiungiamo i tipi alla select

  const select = $('#type');
  
  select.append('<option value="animals">Animals</option>');
  select.append('<option value="fruits-vegetables">Fruits & Vegetables</option>');
  select.append('<option value="users">Users</option>');

  const selectedOption = document.getElementById('type');
   
  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
  selectedOption.addEventListener('change', event => {
    const scelta = $('#type option:selected').val();
    const iconsFilter =  scelta ? iconsColor.filter(Icon => Icon.family == scelta) : iconsColor;
     
    container.innerHTML = '';
     
    iconsFilter.forEach(Icon => {
      const markup = `
        <div>
          <i class="${Icon.prefix} ${Icon.type}" style="color:${Icon.color}"></i>
          <div class="title">${Icon.name}</div>
        </div>
     `;
      container.insertAdjacentHTML('beforeend', markup);     
    });    
  });  
});

/* ---- FUNCTIONS ----*/