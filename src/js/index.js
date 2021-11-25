console.log("Dev m3");
const $ = id => document.getElementById(id);

const content = $('content')

const error = `
<article class="error">
<img src="/img/img_error.png" alt="">
<div class="errorContent">
  <p class="textError">Sem combinações</p>
</article>
`
const addItem = product => {
    let item = `
    <article class="card">
            <img src="${product.image}" alt="">
            <div class="cardContent">
              <h4 class="cardTitle">${product.name}</h4>
              <span class="price">R$ ${product.price}</span>
              <p class="discount">até ${product.parcelamento[0]}x de R$${product.parcelamento[1]}</p>
            </div>
            <button id="buy-${product.id}"class="buy">COMPRAR</button>
          </article>
    `
    content.innerHTML += item;
}
var mediaqueryList = window.matchMedia("(max-width: 767px)");

let color = "";
let size = "";
let price = 5;
let filtrados;
let limitMobile = 6;
let limitDesktop = 9

/* Colours */
let amarelo = $('amarelo')
let azul = $('azul')
let branco = $('branco')
let cinza = $('cinza')
let laranja = $('laranja')
let verde = $('verde')
let vermelho = $('vermelho')
let preto = $('preto')
let rosa = $('rosa')
let vinho = $('vinho')

/* sizes inputs */
let p = $('p-input')
let m = $('m-input')
let g = $('g-input')
let gg = $('gg-input')
let u = $('u-input')
let tresSeis = $('36-input')
let tresOcho = $('38-input')
let cuatroCero = $('40-input')
let cuatroDos = $('42-input')
let cuatroCuatro = $('44-input')
let cuatroSeis = $('46-input')

/* sizes box */
let pBox = $('p-size')
let mBox = $('m-size')
let gBox = $('g-size')
let ggBox = $('gg-size')
let uBox = $('u-size')
let tresSeisBox = $('36-size')
let tresOchoBox = $('38-size')
let cuatroCeroBox = $('40-size')
let cuatroDosBox = $('42-size')
let cuatroCuatroBox = $('44-size')
let cuatroSeisBox = $('46-size')

/* prices Input */
let price1 = $('price1')
let price2 = $('price2')
let price3 = $('price3')
let price4 = $('price4')
let price5 = $('price5')

let carregar = $('carga')

 let filterMobile = (color, size, price, limitMobile) => {
    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then(products => {
    
    let productosFiltrados = products.filter(product => {
      
      if(product.size.length != 2){
        return product.size[0].toLowerCase().includes(size) && product.color.toLowerCase().includes(color)
       }else{
        return (product.size[0].toLowerCase().includes(size) || product.size[1].toLowerCase().includes(size)) && product.color.toLowerCase().includes(color)
       }
     })

     switch (price) {
       case 1:
         filtrados = productosFiltrados.filter(product => product.price > 0 && product.price < 50)
         if(filtrados.length === 0){
           content.innerHTML = null
           content.innerHTML += error
         }else{
          content.innerHTML = null
          let filtradosShow = filtrados.slice(0,limitMobile)
          filtradosShow.forEach(product => {
            addItem(product)
          })
         }
         break;
        case 2:
          filtrados = productosFiltrados.filter(product => product.price > 51 && product.price < 150)
          if(filtrados.length === 0){
            content.innerHTML = null
           content.innerHTML += error
          }else{
            content.innerHTML = null
            let filtradosShow = filtrados.slice(0,limitMobile)
            filtradosShow.forEach(product => {
              addItem(product)
            })
          }
          break;
        case 3:
          filtrados = productosFiltrados.filter(product => product.price > 151 && product.price < 300)
          
          if(filtrados.length === 0){
            content.innerHTML = null
           content.innerHTML +=  error
          }else{
            content.innerHTML = null
            let filtradosShow = filtrados.slice(0,limitMobile)
            filtradosShow.forEach(product => {
            addItem(product)
          })
          }
          break;
          case 4:
          filtrados = productosFiltrados.filter(product => product.price > 301 && product.price < 500)
          
          if(filtrados.length === 0){
            content.innerHTML = null
           content.innerHTML +=  error
          }else{
            content.innerHTML = null
            let filtradosShow = filtrados.slice(0,limitMobile)
            filtradosShow.forEach(product => {
            addItem(product)
          })
          }
          break;
          case 5:
          filtrados = productosFiltrados.filter(product => product.price > 1)
          if(filtrados.length === 0){
            content.innerHTML = null
            content.innerHTML += error
          }else{
            content.innerHTML = null
            let filtradosShow = filtrados.slice(0,limitMobile)
            filtradosShow.forEach(product => {
              addItem(product)
            })
          }
          break;
       default:
         break;
     }

  })
}

let filterDesktop = (color, size, price) => {
  fetch('http://localhost:5000/products')
  .then(response => response.json())
  .then(products => {
  
  let productosFiltrados = products.filter(product => {
    
     if(product.size.length != 2){
      return product.size[0].toLowerCase().includes(size) && product.color.toLowerCase().includes(color)
     }else{
      return (product.size[0].toLowerCase().includes(size) || product.size[1].toLowerCase().includes(size)) && product.color.toLowerCase().includes(color)
     }
   })

   switch (price) {
     case 1:
       filtrados = productosFiltrados.filter(product => product.price > 0 && product.price < 50)
       
       if(filtrados.length === 0){
         content.innerHTML = null
         content.innerHTML +=  error
       }else{
        content.innerHTML = null
        let filtradosShow = filtrados.slice(0,limitDesktop)
        filtradosShow.forEach(product => {
              addItem(product)
            })
       }
       break;
      case 2:
        filtrados = productosFiltrados.filter(product => product.price > 51 && product.price < 150)
        if(filtrados.length === 0){
          content.innerHTML = null
         content.innerHTML +=  error
        }else{
          content.innerHTML = null
          let filtradosShow = filtrados.slice(0,limitDesktop)
          filtradosShow.forEach(product => {
            addItem(product)
          })
        }
        break;
      case 3:
        filtrados = productosFiltrados.filter(product => product.price > 151 && product.price < 300)
        
        if(filtrados.length === 0){
          content.innerHTML = null
         content.innerHTML +=  error
        }else{
          content.innerHTML = null
          let filtradosShow = filtrados.slice(0,limitDesktop)
          filtradosShow.forEach(product => {
            addItem(product)
          })
        }
        break;
        case 4:
        filtrados = productosFiltrados.filter(product => product.price > 301 && product.price < 500)
        
        if(filtrados.length === 0){
          content.innerHTML = null
         content.innerHTML +=  error
        }else{
          content.innerHTML = null
          let filtradosShow = filtrados.slice(0,limitDesktop)
          filtradosShow.forEach(product => {
            addItem(product)
          })
        }
        break;
        case 5:
        filtrados = productosFiltrados.filter(product => product.price > 1)
        if(filtrados.length === 0){
          content.innerHTML = null
          content.innerHTML += error
        }else{
          content.innerHTML = null
          let filtradosShow = filtrados.slice(0,limitDesktop)
          filtradosShow.forEach(product => {
            addItem(product)
          })
        }
        break;
     default:
       break;
   }

})
}
 
if(mediaqueryList.matches) {
    filterMobile(color, size, price, limitMobile)
    carregar.addEventListener('click', () => {
      limitMobile = limitMobile + 6
      filterMobile(color, size, price, limitMobile)
    })
    console.log('mobile');
  }else{
    filterDesktop(color, size, price, limitDesktop)
    carregar.addEventListener('click', () => {
      limitDesktop = limitDesktop + 9
      filterDesktop(color, size, price, limitDesktop)
    })
      console.log('desktop')
  }
 

mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    location.reload()
    console.log('mobile');
  } else {
    console.log('desktop');
    location.reload()
  }
});

amarelo.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "amarelo";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "amarelo";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "amarelo";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "amarelo";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "amarelo";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "amarelo";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "amarelo";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "amarelo";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "amarelo";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "amarelo";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "amarelo";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "amarelo";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "amarelo";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "amarelo";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "amarelo";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "amarelo";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "amarelo";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "amarelo";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "amarelo";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "amarelo";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "amarelo";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "amarelo";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "amarelo";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "amarelo";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "amarelo";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "amarelo";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "amarelo";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "amarelo";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "amarelo";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "amarelo";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "amarelo";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "amarelo";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "amarelo";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "amarelo";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "amarelo";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "amarelo";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "amarelo";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "amarelo";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "amarelo";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "amarelo";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "amarelo";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "amarelo";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "amarelo";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "amarelo";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "amarelo";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "amarelo";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "amarelo";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "amarelo";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "amarelo";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "amarelo";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "amarelo";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "amarelo";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "amarelo";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "amarelo";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "amarelo";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "amarelo";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "amarelo";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "amarelo";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "amarelo";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "amarelo";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "amarelo";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "amarelo";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "amarelo";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "amarelo";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "amarelo";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "amarelo";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

azul.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "azul";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "azul";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "azul";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "azul";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "azul";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "azul";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "azul";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "azul";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "azul";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "azul";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "azul";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "azul";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "azul";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "azul";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "azul";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "azul";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "azul";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "azul";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "azul";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "azul";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "azul";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "azul";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "azul";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "azul";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "azul";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "azul";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "azul";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "azul";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "azul";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "azul";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "azul";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "azul";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "azul";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "azul";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "azul";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "azul";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "azul";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "azul";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "azul";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "azul";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "azul";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "azul";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "azul";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "azul";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "azul";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "azul";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "azul";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "azul";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "azul";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "azul";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "azul";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "azul";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "azul";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "azul";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "azul";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "azul";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "azul";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "azul";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "azul";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "azul";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "azul";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "azul";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "azul";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "azul";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "azul";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "azul";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "azul";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "azul";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

branco.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "branco";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "branco";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "branco";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "branco";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "branco";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "branco";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "branco";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "branco";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "branco";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "branco";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "branco";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "branco";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "branco";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "branco";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "branco";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "branco";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "branco";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "branco";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "branco";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "branco";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "branco";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "branco";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "branco";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "branco";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "branco";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "branco";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "branco";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "branco";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "branco";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "branco";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "branco";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "branco";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "branco";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "branco";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "branco";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "branco";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "branco";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "branco";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "branco";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "branco";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "branco";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "branco";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "branco";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "branco";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "branco";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "branco";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "branco";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "branco";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "branco";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "branco";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "branco";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "branco";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "branco";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "branco";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "branco";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "branco";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "branco";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "branco";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "branco";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "branco";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "branco";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "branco";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "branco";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "branco";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "branco";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "branco";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "branco";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "branco";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

cinza.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "cinza";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "cinza";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "cinza";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "cinza";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "cinza";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "cinza";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "cinza";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "cinza";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "cinza";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "cinza";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "cinza";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "cinza";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "cinza";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "cinza";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "cinza";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "cinza";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "cinza";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "cinza";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "cinza";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "cinza";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "cinza";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "cinza";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "cinza";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "cinza";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "cinza";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "cinza";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "cinza";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "cinza";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "cinza";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "cinza";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "cinza";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "cinza";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "cinza";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "cinza";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "cinza";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "cinza";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "cinza";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "cinza";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "cinza";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "cinza";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "cinza";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "cinza";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "cinza";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "cinza";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "cinza";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "cinza";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "cinza";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "cinza";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "cinza";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "cinza";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "cinza";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "cinza";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "cinza";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "cinza";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "cinza";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "cinza";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "cinza";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "cinza";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "cinza";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "cinza";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "cinza";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "cinza";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "cinza";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "cinza";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "cinza";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "cinza";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

laranja.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "laranja";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "laranja";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "laranja";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "laranja";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "laranja";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "laranja";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "laranja";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "laranja";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "laranja";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "laranja";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "laranja";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "laranja";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "laranja";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "laranja";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "laranja";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "laranja";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "laranja";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "laranja";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "laranja";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "laranja";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "laranja";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "laranja";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "laranja";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "laranja";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "laranja";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "laranja";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "laranja";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "laranja";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "laranja";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "laranja";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "laranja";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "laranja";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "laranja";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "laranja";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "laranja";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "laranja";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "laranja";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "laranja";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "laranja";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "laranja";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "laranja";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "laranja";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "laranja";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "laranja";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "laranja";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "laranja";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "laranja";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "laranja";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "laranja";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "laranja";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "laranja";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "laranja";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "laranja";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "laranja";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "laranja";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "laranja";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "laranja";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "laranja";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "laranja";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "laranja";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "laranja";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "laranja";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "laranja";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "laranja";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "laranja";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "laranja";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

verde.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "verde";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "verde";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "verde";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "verde";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "verde";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "verde";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "verde";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "verde";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "verde";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "verde";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "verde";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "verde";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "verde";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "verde";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "verde";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "verde";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "verde";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "verde";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "verde";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "verde";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "verde";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "verde";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "verde";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "verde";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "verde";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "verde";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "verde";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "verde";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "verde";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "verde";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "verde";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "verde";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "verde";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "verde";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "verde";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "verde";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "verde";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "verde";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "verde";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "verde";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "verde";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "verde";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "verde";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "verde";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "verde";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "verde";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "verde";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "verde";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "verde";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "verde";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "verde";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "verde";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "verde";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "verde";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "verde";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "verde";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "verde";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "verde";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "verde";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "verde";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "verde";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "verde";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "verde";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "verde";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "verde";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "verde";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "verde";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "verde";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

vermelho.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "vermelho";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "vermelho";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "vermelho";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "vermelho";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "vermelho";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "vermelho";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "vermelho";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "vermelho";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "vermelho";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "vermelho";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "vermelho";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "vermelho";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "vermelho";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "vermelho";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "vermelho";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "vermelho";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "vermelho";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "vermelho";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "vermelho";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "vermelho";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "vermelho";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "vermelho";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "vermelho";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "vermelho";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "vermelho";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "vermelho";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "vermelho";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "vermelho";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "vermelho";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "vermelho";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "vermelho";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "vermelho";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "vermelho";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "vermelho";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "vermelho";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "vermelho";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "vermelho";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "vermelho";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "vermelho";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "vermelho";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "vermelho";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "vermelho";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "vermelho";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "vermelho";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "vermelho";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "vermelho";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "vermelho";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "vermelho";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "vermelho";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "vermelho";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "vermelho";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "vermelho";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "vermelho";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "vermelho";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "vermelho";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "vermelho";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "vermelho";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "vermelho";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "vermelho";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "vermelho";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "vermelho";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "vermelho";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "vermelho";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "vermelho";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "vermelho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "vermelho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

preto.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "preto";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "preto";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "preto";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "preto";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "preto";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "preto";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "preto";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "preto";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "preto";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "preto";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "preto";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "preto";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "preto";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "preto";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "preto";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "preto";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "preto";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "preto";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "preto";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "preto";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "preto";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "preto";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "preto";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "preto";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "preto";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "preto";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "preto";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "preto";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "preto";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "preto";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "preto";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "preto";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "preto";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "preto";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "preto";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "preto";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "preto";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "preto";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "preto";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "preto";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "preto";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "preto";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "preto";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "preto";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "preto";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "preto";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "preto";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "preto";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "preto";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "preto";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "preto";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "preto";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "preto";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "preto";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "preto";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "preto";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "preto";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "preto";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "preto";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "preto";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "preto";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "preto";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "preto";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "preto";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "preto";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "preto";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "preto";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "preto";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

rosa.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "rosa";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "rosa";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "rosa";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "rosa";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "rosa";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "rosa";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "rosa";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "rosa";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "rosa";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "rosa";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "rosa";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "rosa";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "rosa";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "rosa";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "rosa";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "rosa";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "rosa";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "rosa";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "rosa";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "rosa";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "rosa";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "rosa";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "rosa";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "rosa";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "rosa";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "rosa";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "rosa";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "rosa";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "rosa";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "rosa";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "rosa";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "rosa";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "rosa";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "rosa";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "rosa";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "rosa";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "rosa";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "rosa";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "rosa";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "rosa";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "rosa";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "rosa";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "rosa";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "rosa";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "rosa";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "rosa";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "rosa";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "rosa";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "rosa";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "rosa";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "rosa";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "rosa";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "rosa";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "rosa";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "rosa";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "rosa";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "rosa";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "rosa";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "rosa";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "rosa";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "rosa";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "rosa";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "rosa";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "rosa";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "rosa";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "rosa";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

vinho.addEventListener('click', () => {
  if(p.checked && price1.checked){
    color = "vinho";
    size = "p";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price2.checked){
    color = "vinho";
    size = "p";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price3.checked){
    color = "vinho";
    size = "p";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price4.checked){
    color = "vinho";
    size = "p";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked && price5.checked){
    color = "vinho";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price1.checked){
    color = "vinho";
    size = "m";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price2.checked){
    color = "vinho";
    size = "m";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price3.checked){
    color = "vinho";
    size = "m";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price4.checked){
    color = "vinho";
    size = "m";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked && price5.checked){
    color = "vinho";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price1.checked){
    color = "vinho";
    size = "g";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price2.checked){
    color = "vinho";
    size = "g";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price3.checked){
    color = "vinho";
    size = "g";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price4.checked){
    color = "vinho";
    size = "g";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked && price5.checked){
    color = "vinho";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price1.checked){
    color = "vinho";
    size = "gg";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price2.checked){
    color = "vinho";
    size = "gg";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price3.checked){
    color = "vinho";
    size = "gg";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price4.checked){
    color = "vinho";
    size = "gg";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked && price5.checked){
    color = "vinho";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price1.checked){
    color = "vinho";
    size = "u";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price2.checked){
    color = "vinho";
    size = "u";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price3.checked){
    color = "vinho";
    size = "u";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price4.checked){
    color = "vinho";
    size = "u";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked && price5.checked){
    color = "vinho";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price1.checked){
    color = "vinho";
    size = "36";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price2.checked){
    color = "vinho";
    size = "36";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price3.checked){
    color = "vinho";
    size = "36";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price4.checked){
    color = "vinho";
    size = "36";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked && price5.checked){
    color = "vinho";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price1.checked){
    color = "vinho";
    size = "38";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price2.checked){
    color = "vinho";
    size = "38";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price3.checked){
    color = "vinho";
    size = "38";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price4.checked){
    color = "vinho";
    size = "38";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked && price5.checked){
    color = "vinho";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price1.checked){
    color = "vinho";
    size = "40";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price2.checked){
    color = "vinho";
    size = "40";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price3.checked){
    color = "vinho";
    size = "40";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price4.checked){
    color = "vinho";
    size = "40";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked && price5.checked){
    color = "vinho";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price1.checked){
    color = "vinho";
    size = "42";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price2.checked){
    color = "vinho";
    size = "42";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price3.checked){
    color = "vinho";
    size = "42";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price4.checked){
    color = "vinho";
    size = "42";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked && price5.checked){
    color = "vinho";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price1.checked){
    color = "vinho";
    size = "44";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price2.checked){
    color = "vinho";
    size = "44";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price3.checked){
    color = "vinho";
    size = "44";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price4.checked){
    color = "vinho";
    size = "44";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked && price5.checked){
    color = "vinho";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price1.checked){
    color = "vinho";
    size = "46";
    price = 1
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price2.checked){
    color = "vinho";
    size = "46";
    price = 2
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price3.checked){
    color = "vinho";
    size = "46";
    price = 3
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price4.checked){
    color = "vinho";
    size = "46";
    price = 4
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked && price5.checked){
    color = "vinho";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "vinho";
    size = "p";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "vinho";
    size = "m";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "vinho";
    size = "g";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "vinho";
    size = "gg";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "vinho";
    size = "u";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 5
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price1.checked){
    color = "vinho";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price2.checked){
    color = "vinho";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price3.checked){
    color = "vinho";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price4.checked){
    color = "vinho";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(price5.checked){
    color = "vinho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "vinho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})


p.addEventListener('change', () => {
    pBox.classList.toggle('checked')
    pBox.classList.toggle('flex')
    mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')
    /* filter */
    if(amarelo.checked && price1.checked){
      size = "p"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "p"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "p"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "p"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "p"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "p"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "p"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "p"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "p"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "p"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "p"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "p"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "p"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "p"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "p"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "p"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "p"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "p"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "p"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "p"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "p"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "p"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "p"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "p"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "p"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "p"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "p"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "p"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "p"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "p"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "p"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "p"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "p"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "p"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "p"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "p"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "p"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "p"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "p"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "p"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "p"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "p"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "p"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "p"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "p"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "p"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "p"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "p"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "p"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "p"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "p"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "p"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "p"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "p"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "p"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "p"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "p"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "p"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "p"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "p"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "p"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "p"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "p"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "p"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "p"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="p"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
m.addEventListener('change', () => {
  mBox.classList.toggle('checked')
  mBox.classList.toggle('flex')
  pBox.classList.remove('checked')
    pBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "m"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "m"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "m"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "m"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "m"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "m"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "m"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "m"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "m"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "m"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "m"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "m"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "m"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "m"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "m"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "m"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "m"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "m"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "m"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "m"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "m"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "m"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "m"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "m"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "m"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "m"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "m"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "m"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "m"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "m"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "m"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "m"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "m"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "m"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "m"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "m"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "m"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "m"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "m"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "m"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "m"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "m"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "m"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "m"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "m"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "m"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "m"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "m"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "m"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "m"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "m"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "m"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "m"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "m"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "m"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "m"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "m"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "m"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "m"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "m"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "m"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "m"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "m"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "m"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "m"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="m"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
  
})
g.addEventListener('change', () => {
  gBox.classList.toggle('checked')
  gBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "g"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "g"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "g"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "g"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "g"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "g"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "g"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "g"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "g"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "g"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "g"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "g"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "g"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "g"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "g"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "g"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "g"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "g"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "g"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "g"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "g"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "g"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "g"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "g"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "g"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "g"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "g"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "g"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "g"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "g"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "g"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "g"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "g"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "g"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "g"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "g"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "g"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "g"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "g"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "g"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "g"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "g"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "g"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "g"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "g"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "g"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "g"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "g"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "g"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "g"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "g"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "g"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "g"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "g"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "g"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "g"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "g"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "g"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "g"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "g"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "g"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "g"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "g"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "g"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "g"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="g"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    
})
gg.addEventListener('change', () => {
  ggBox.classList.toggle('checked')
  ggBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "gg"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "gg"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "gg"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "gg"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "gg"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "gg"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "gg"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "gg"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "gg"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "gg"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "gg"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "gg"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "gg"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "gg"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "gg"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "gg"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "gg"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "gg"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "gg"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "gg"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "gg"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "gg"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "gg"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "gg"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "gg"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "gg"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "gg"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "gg"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "gg"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "gg"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "gg"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "gg"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "gg"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "gg"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "gg"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "gg"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "gg"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "gg"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "gg"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "gg"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "gg"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "gg"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "gg"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "gg"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "gg"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "gg"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "gg"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "gg"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "gg"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "gg"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "gg"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "gg"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "gg"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "gg"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "gg"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "gg"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "gg"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "gg"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "gg"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "gg"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "gg"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "gg"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "gg"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "gg"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "gg"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="gg"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
u.addEventListener('change', () => {
  uBox.classList.toggle('checked')
  uBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "u"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "u"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "u"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "u"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "u"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "u"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "u"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "u"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "u"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "u"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "u"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "u"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "u"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "u"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "u"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "u"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "u"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "u"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "u"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "u"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "u"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "u"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "u"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "u"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "u"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "u"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "u"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "u"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "u"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "u"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "u"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "u"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "u"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "u"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "u"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "u"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "u"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "u"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "u"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "u"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "u"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "u"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "u"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "u"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "u"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "u"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "u"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "u"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "u"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "u"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "u"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "u"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "u"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "u"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "u"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "u"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "u"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "u"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "u"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "u"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "u"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "u"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "u"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "u"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "u"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="u"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
tresSeis.addEventListener('change', () => {
  tresSeisBox.classList.toggle('checked')
  tresSeisBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "36"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "36"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "36"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "36"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "36"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "36"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "36"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "36"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "36"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "36"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "36"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "36"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "36"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "36"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "36"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "36"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "36"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "36"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "36"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "36"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "36"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "36"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "36"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "36"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "36"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "36"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "36"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "36"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "36"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "36"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "36"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "36"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "36"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "36"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "36"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "36"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "36"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "36"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "36"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "36"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "36"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "36"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "36"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "36"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "36"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "36"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "36"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "36"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "36"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "36"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "36"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "36"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "36"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "36"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "36"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "36"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "36"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "36"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "36"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "36"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "36"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "36"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "36"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "36"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "36"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="36"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
tresOcho.addEventListener('change', () => {
  tresOchoBox.classList.toggle('checked')
  tresOchoBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "38"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "38"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "38"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "38"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "38"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "38"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "38"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "38"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "38"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "38"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "38"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "38"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "38"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "38"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "38"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "38"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "38"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "38"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "38"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "38"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "38"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "38"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "38"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "38"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "38"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "38"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "38"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "38"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "38"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "38"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "38"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "38"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "38"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "38"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "38"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "38"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "38"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "38"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "38"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "38"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "38"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "38"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "38"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "38"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "38"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "38"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "38"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "38"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "38"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "38"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "38"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "38"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "38"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "38"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "38"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "38"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "38"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "38"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "38"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "38"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "38"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "38"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "38"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "38"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "38"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="38"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
cuatroCero.addEventListener('change', () => {
  cuatroCeroBox.classList.toggle('checked')
  cuatroCeroBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "40"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "40"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "40"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "40"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "40"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "40"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "40"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "40"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "40"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "40"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "40"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "40"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "40"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "40"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "40"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "40"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "40"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "40"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "40"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "40"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "40"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "40"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "40"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "40"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "40"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "40"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "40"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "40"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "40"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "40"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "40"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "40"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "40"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "40"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "40"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "40"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "40"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "40"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "40"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "40"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "40"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "40"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "40"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "40"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "40"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "40"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "40"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "40"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "40"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "40"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "40"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "40"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "40"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "40"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "40"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "40"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "40"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "40"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "40"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "40"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "40"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "40"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "40"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "40"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "40"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="40"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
cuatroDos.addEventListener('change', () => {
  cuatroDosBox.classList.toggle('checked')
  cuatroDosBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "42"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "42"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "42"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "42"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "42"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "42"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "42"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "42"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "42"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "42"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "42"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "42"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "42"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "42"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "42"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "42"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "42"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "42"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "42"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "42"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "42"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "42"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "42"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "42"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "42"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "42"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "42"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "42"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "42"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "42"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "42"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "42"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "42"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "42"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "42"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "42"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "42"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "42"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "42"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "42"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "42"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "42"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "42"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "42"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "42"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "42"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "42"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "42"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "42"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "42"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "42"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "42"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "42"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "42"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "42"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "42"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "42"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "42"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "42"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "42"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "42"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "42"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "42"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "42"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "42"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="42"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
cuatroCuatro.addEventListener('change', () => {
  cuatroCuatroBox.classList.toggle('checked')
  cuatroCuatroBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    cuatroSeisBox.classList.remove('checked')
    cuatroSeisBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "44"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "44"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "44"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "44"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "44"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "44"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "44"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "44"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "44"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "44"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "44"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "44"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "44"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "44"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "44"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "44"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "44"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "44"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "44"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "44"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "44"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "44"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "44"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "44"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "44"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "44"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "44"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "44"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "44"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "44"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "44"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "44"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "44"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "44"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "44"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "44"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "44"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "44"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "44"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "44"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "44"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "44"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "44"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "44"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "44"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "44"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "44"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "44"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "44"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "44"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "44"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "44"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "44"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "44"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "44"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "44"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "44"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "44"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "44"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "44"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "44"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "44"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "44"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "44"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "44"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="44"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})
cuatroSeis.addEventListener('change', () => {
  cuatroSeisBox.classList.toggle('checked')
  cuatroSeisBox.classList.toggle('flex')
  mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')

    /* filter */
    if(amarelo.checked && price1.checked){
      size = "46"
      color = "amarelo"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price2.checked){
      size = "46"
      color = "amarelo"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price3.checked){
      size = "46"
      color = "amarelo"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price4.checked){
      size = "46"
      color = "amarelo"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked && price5.checked){
      size = "46"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price1.checked){
      size = "46"
      color = "azul"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked && price2.checked){
      size = "46"
      color = "azul"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price3.checked){
      size = "46"
      color = "azul"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price4.checked){
      size = "46"
      color = "azul"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(azul.checked && price5.checked){
      size = "46"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price1.checked){
      size = "46"
      color = "branco"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price2.checked){
      size = "46"
      color = "branco"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price3.checked){
      size = "46"
      color = "branco"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(branco.checked && price4.checked){
      size = "46"
      color = "branco"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked && price5.checked){
      size = "46"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price1.checked){
      size = "46"
      color = "cinza"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price2.checked){
      size = "46"
      color = "cinza"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price3.checked){
      size = "46"
      color = "cinza"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price4.checked){
      size = "46"
      color = "cinza"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked && price5.checked){
      size = "46"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price1.checked){
      size = "46"
      color = "laranja"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price2.checked){
      size = "46"
      color = "laranja"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price3.checked){
      size = "46"
      color = "laranja"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(laranja.checked && price4.checked){
      size = "46"
      color = "laranja"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked && price5.checked){
      size = "46"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price1.checked){
      size = "46"
      color = "verde"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
    else if(verde.checked && price2.checked){
      size = "46"
      color = "verde"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price3.checked){
      size = "46"
      color = "verde"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price4.checked){
      size = "46"
      color = "verde"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked && price5.checked){
      size = "46"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price1.checked){
      size = "46"
      color = "vermelho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price2.checked){
      size = "46"
      color = "vermelho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price3.checked){
      size = "46"
      color = "vermelho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price4.checked){
      size = "46"
      color = "vermelho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked && price5.checked){
      size = "46"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price1.checked){
      size = "46"
      color = "preto"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price2.checked){
      size = "46"
      color = "preto"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price3.checked){
      size = "46"
      color = "preto"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price4.checked){
      size = "46"
      color = "preto"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked && price5.checked){
      size = "46"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price1.checked){
      size = "46"
      color = "rosa"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price2.checked){
      size = "46"
      color = "rosa"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price3.checked){
      size = "46"
      color = "rosa"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price4.checked){
      size = "46"
      color = "rosa"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked && price5.checked){
      size = "46"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price1.checked){
      size = "46"
      color = "vinho"
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price2.checked){
      size = "46"
      color = "vinho"
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price3.checked){
      size = "46"
      color = "vinho"
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price4.checked){
      size = "46"
      color = "vinho"
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked && price5.checked){
      size = "46"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price1.checked){
      size = "46"
      color = ""
      price = 1
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price2.checked){
      size = "46"
      color = ""
      price = 2
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price3.checked){
      size = "46"
      color = ""
      price = 3
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price4.checked){
      size = "46"
      color = ""
      price = 4
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(price5.checked){
      size = "46"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(amarelo.checked){
      size = "46"
      color = "amarelo"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(azul.checked){
      size = "46"
      color = "azul"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(branco.checked){
      size = "46"
      color = "branco"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(cinza.checked){
      size = "46"
      color = "cinza"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(laranja.checked){
      size = "46"
      color = "laranja"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(verde.checked){
      size = "46"
      color = "verde"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vermelho.checked){
      size = "46"
      color = "vermelho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(preto.checked){
      size = "46"
      color = "preto"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(rosa.checked){
      size = "46"
      color = "rosa"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else if(vinho.checked){
      size = "46"
      color = "vinho"
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }else{
      size ="46"
      color = ""
      price = 5
      carregar.style.display = "none"
      filterDesktop(color,size,price)
    }
})

$('more-sizes').addEventListener("click", () => {
    $('more-sizes').classList.toggle('ocultar')
    $('less-sizes').classList.toggle('ocultar')
    $('sizes-content').style.display = "flex"
    $('filter-buttons').style.display = "flex"
})

$('less-sizes').addEventListener("click", () => {
    $('more-sizes').classList.toggle('ocultar')
    $('less-sizes').classList.toggle('ocultar')
    $('sizes-content').style.display = "none"
    $('filter-buttons').style.display = "none"
})

$('more-colours').addEventListener("click", () => {
    $('more-colours').classList.toggle('ocultar')
    $('less-colours').classList.toggle('ocultar')
    $('colours-content').style.display = "flex"
    $('filter-buttons').style.display = "flex"
})

$('less-colours').addEventListener("click", () => {
    $('more-colours').classList.toggle('ocultar')
    $('less-colours').classList.toggle('ocultar')
    $('colours-content').style.display = "none"
    $('filter-buttons').style.display = "none"
})

$('more-prices').addEventListener("click", () => {
    $('more-prices').classList.toggle('ocultar')
    $('less-prices').classList.toggle('ocultar')
    $('prices-content').style.display = "flex"
    $('filter-buttons').style.display = "flex"
})

$('less-prices').addEventListener("click", () => {
    $('more-prices').classList.toggle('ocultar')
    $('less-prices').classList.toggle('ocultar')
    $('prices-content').style.display = "none"
    $('filter-buttons').style.display = "none"
})

$('filter-button').addEventListener('click', e => {
    e.preventDefault()
    $('filter-content').style.display = "flex"
    $('container').style.display = "none"
    $('footer').style.display = "none"
    $('filter-subtitle').style.display = "none"
})

$('less-filters').addEventListener('click', () => {
    $('filter-content').style.display = "none"
    $('container').style.display = "block"
    $('footer').style.display = "flex"
    $('filter-subtitle').style.display = "flex"
    carregar.style.display = "block"
    filterMobile("","",5,limitMobile)
})

$('order-button').addEventListener('click', e => {
    e.preventDefault()
    $('order-list').style.display = "flex"
    $('container').style.display = "none"
    $('footer').style.display = "none"
    $('filter-subtitle').style.display = "none"
})

$('less-order').addEventListener('click', () => {
    $('order-list').style.display = "none"
    $('container').style.display = "block"
    $('footer').style.display = "flex"
    $('filter-subtitle').style.display = "flex"
})

price1.addEventListener('click' , () => {
  if(amarelo.checked && p.checked){
    color = "amarelo";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && m.checked){
    color = "amarelo";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && g.checked){
    color = "amarelo";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && gg.checked){
    color = "amarelo";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && u.checked){
    color = "amarelo";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && p.checked){
    color = "azul";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && m.checked){
    color = "azul";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && g.checked){
    color = "azul";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && gg.checked){
    color = "azul";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && u.checked){
    color = "azul";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresSeis.checked){
    color = "azul";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresOcho.checked){
    color = "azul";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && p.checked){
    color = "branco";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && m.checked){
    color = "branco";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && g.checked){
    color = "branco";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && gg.checked){
    color = "branco";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && u.checked){
    color = "branco";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresSeis.checked){
    color = "branco";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresOcho.checked){
    color = "branco";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && p.checked){
    color = "cinza";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && m.checked){
    color = "cinza";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && g.checked){
    color = "cinza";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && gg.checked){
    color = "cinza";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && u.checked){
    color = "cinza";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && p.checked){
    color = "laranja";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && m.checked){
    color = "laranja";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && g.checked){
    color = "laranja";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && gg.checked){
    color = "laranja";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && u.checked){
    color = "laranja";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && p.checked){
    color = "verde";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && m.checked){
    color = "verde";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && g.checked){
    color = "verde";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && gg.checked){
    color = "verde";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && u.checked){
    color = "verde";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresSeis.checked){
    color = "verde";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresOcho.checked){
    color = "verde";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && p.checked){
    color = "vermelho";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && m.checked){
    color = "vermelho";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && g.checked){
    color = "vermelho";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && gg.checked){
    color = "vermelho";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && u.checked){
    color = "vermelho";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && p.checked){
    color = "preto";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && m.checked){
    color = "preto";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && g.checked){
    color = "preto";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && gg.checked){
    color = "preto";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && u.checked){
    color = "preto";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresSeis.checked){
    color = "preto";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresOcho.checked){
    color = "preto";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && p.checked){
    color = "rosa";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && m.checked){
    color = "rosa";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && g.checked){
    color = "rosa";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && gg.checked){
    color = "rosa";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && u.checked){
    color = "rosa";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && p.checked){
    color = "vinho";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && m.checked){
    color = "vinho";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && g.checked){
    color = "vinho";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && gg.checked){
    color = "vinho";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && u.checked){
    color = "vinho";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked){
    color = "amarelo";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked){
    color = "azul";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked){
    color = "branco";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked){
    color = "cinza";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked){
    color = "laranja";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked){
    color = "verde";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked){
    color = "vermelho";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked){
    color = "preto";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked){
    color = "rosa";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked){
    color = "vinho";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "";
    size = "p";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "";
    size = "m";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "";
    size = "g";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "";
    size = "gg";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "";
    size = "u";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "";
    size = "36";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "";
    size = "38";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "";
    size = "40";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "";
    size = "42";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "";
    size = "44";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "";
    size = "46";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "";
    size = "";
    price = 1;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

price2.addEventListener('click' , () => {
  if(amarelo.checked && p.checked){
    color = "amarelo";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && m.checked){
    color = "amarelo";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && g.checked){
    color = "amarelo";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && gg.checked){
    color = "amarelo";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && u.checked){
    color = "amarelo";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && p.checked){
    color = "azul";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && m.checked){
    color = "azul";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && g.checked){
    color = "azul";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && gg.checked){
    color = "azul";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && u.checked){
    color = "azul";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresSeis.checked){
    color = "azul";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresOcho.checked){
    color = "azul";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && p.checked){
    color = "branco";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && m.checked){
    color = "branco";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && g.checked){
    color = "branco";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && gg.checked){
    color = "branco";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && u.checked){
    color = "branco";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresSeis.checked){
    color = "branco";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresOcho.checked){
    color = "branco";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && p.checked){
    color = "cinza";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && m.checked){
    color = "cinza";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && g.checked){
    color = "cinza";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && gg.checked){
    color = "cinza";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && u.checked){
    color = "cinza";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && p.checked){
    color = "laranja";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && m.checked){
    color = "laranja";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && g.checked){
    color = "laranja";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && gg.checked){
    color = "laranja";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && u.checked){
    color = "laranja";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && p.checked){
    color = "verde";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && m.checked){
    color = "verde";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && g.checked){
    color = "verde";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && gg.checked){
    color = "verde";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && u.checked){
    color = "verde";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresSeis.checked){
    color = "verde";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresOcho.checked){
    color = "verde";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && p.checked){
    color = "vermelho";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && m.checked){
    color = "vermelho";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && g.checked){
    color = "vermelho";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && gg.checked){
    color = "vermelho";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && u.checked){
    color = "vermelho";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && p.checked){
    color = "preto";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && m.checked){
    color = "preto";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && g.checked){
    color = "preto";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && gg.checked){
    color = "preto";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && u.checked){
    color = "preto";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresSeis.checked){
    color = "preto";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresOcho.checked){
    color = "preto";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && p.checked){
    color = "rosa";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && m.checked){
    color = "rosa";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && g.checked){
    color = "rosa";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && gg.checked){
    color = "rosa";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && u.checked){
    color = "rosa";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && p.checked){
    color = "vinho";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && m.checked){
    color = "vinho";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && g.checked){
    color = "vinho";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && gg.checked){
    color = "vinho";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && u.checked){
    color = "vinho";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked){
    color = "amarelo";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked){
    color = "azul";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked){
    color = "branco";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked){
    color = "cinza";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked){
    color = "laranja";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked){
    color = "verde";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked){
    color = "vermelho";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked){
    color = "preto";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked){
    color = "rosa";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked){
    color = "vinho";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "";
    size = "p";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "";
    size = "m";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "";
    size = "g";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "";
    size = "gg";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "";
    size = "u";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "";
    size = "36";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "";
    size = "38";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "";
    size = "40";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "";
    size = "42";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "";
    size = "44";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "";
    size = "46";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "";
    size = "";
    price = 2;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

price3.addEventListener('click' , () => {
  if(amarelo.checked && p.checked){
    color = "amarelo";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && m.checked){
    color = "amarelo";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && g.checked){
    color = "amarelo";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && gg.checked){
    color = "amarelo";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && u.checked){
    color = "amarelo";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && p.checked){
    color = "azul";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && m.checked){
    color = "azul";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && g.checked){
    color = "azul";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && gg.checked){
    color = "azul";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && u.checked){
    color = "azul";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresSeis.checked){
    color = "azul";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresOcho.checked){
    color = "azul";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && p.checked){
    color = "branco";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && m.checked){
    color = "branco";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && g.checked){
    color = "branco";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && gg.checked){
    color = "branco";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && u.checked){
    color = "branco";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresSeis.checked){
    color = "branco";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresOcho.checked){
    color = "branco";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && p.checked){
    color = "cinza";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && m.checked){
    color = "cinza";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && g.checked){
    color = "cinza";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && gg.checked){
    color = "cinza";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && u.checked){
    color = "cinza";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && p.checked){
    color = "laranja";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && m.checked){
    color = "laranja";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && g.checked){
    color = "laranja";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && gg.checked){
    color = "laranja";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && u.checked){
    color = "laranja";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && p.checked){
    color = "verde";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && m.checked){
    color = "verde";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && g.checked){
    color = "verde";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && gg.checked){
    color = "verde";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && u.checked){
    color = "verde";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresSeis.checked){
    color = "verde";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresOcho.checked){
    color = "verde";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && p.checked){
    color = "vermelho";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && m.checked){
    color = "vermelho";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && g.checked){
    color = "vermelho";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && gg.checked){
    color = "vermelho";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && u.checked){
    color = "vermelho";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && p.checked){
    color = "preto";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && m.checked){
    color = "preto";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && g.checked){
    color = "preto";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && gg.checked){
    color = "preto";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && u.checked){
    color = "preto";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresSeis.checked){
    color = "preto";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresOcho.checked){
    color = "preto";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && p.checked){
    color = "rosa";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && m.checked){
    color = "rosa";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && g.checked){
    color = "rosa";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && gg.checked){
    color = "rosa";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && u.checked){
    color = "rosa";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && p.checked){
    color = "vinho";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && m.checked){
    color = "vinho";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && g.checked){
    color = "vinho";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && gg.checked){
    color = "vinho";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && u.checked){
    color = "vinho";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked){
    color = "amarelo";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked){
    color = "azul";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked){
    color = "branco";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked){
    color = "cinza";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked){
    color = "laranja";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked){
    color = "verde";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked){
    color = "vermelho";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked){
    color = "preto";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked){
    color = "rosa";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked){
    color = "vinho";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "";
    size = "p";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "";
    size = "m";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "";
    size = "g";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "";
    size = "gg";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "";
    size = "u";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "";
    size = "36";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "";
    size = "38";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "";
    size = "40";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "";
    size = "42";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "";
    size = "44";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "";
    size = "46";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "";
    size = "";
    price = 3;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

price4.addEventListener('click' , () => {
  if(amarelo.checked && p.checked){
    color = "amarelo";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && m.checked){
    color = "amarelo";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && g.checked){
    color = "amarelo";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && gg.checked){
    color = "amarelo";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && u.checked){
    color = "amarelo";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && p.checked){
    color = "azul";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && m.checked){
    color = "azul";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && g.checked){
    color = "azul";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && gg.checked){
    color = "azul";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && u.checked){
    color = "azul";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresSeis.checked){
    color = "azul";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresOcho.checked){
    color = "azul";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && p.checked){
    color = "branco";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && m.checked){
    color = "branco";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && g.checked){
    color = "branco";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && gg.checked){
    color = "branco";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && u.checked){
    color = "branco";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresSeis.checked){
    color = "branco";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresOcho.checked){
    color = "branco";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && p.checked){
    color = "cinza";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && m.checked){
    color = "cinza";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && g.checked){
    color = "cinza";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && gg.checked){
    color = "cinza";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && u.checked){
    color = "cinza";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && p.checked){
    color = "laranja";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && m.checked){
    color = "laranja";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && g.checked){
    color = "laranja";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && gg.checked){
    color = "laranja";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && u.checked){
    color = "laranja";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && p.checked){
    color = "verde";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && m.checked){
    color = "verde";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && g.checked){
    color = "verde";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && gg.checked){
    color = "verde";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && u.checked){
    color = "verde";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresSeis.checked){
    color = "verde";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresOcho.checked){
    color = "verde";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && p.checked){
    color = "vermelho";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && m.checked){
    color = "vermelho";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && g.checked){
    color = "vermelho";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && gg.checked){
    color = "vermelho";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && u.checked){
    color = "vermelho";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && p.checked){
    color = "preto";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && m.checked){
    color = "preto";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && g.checked){
    color = "preto";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && gg.checked){
    color = "preto";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && u.checked){
    color = "preto";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresSeis.checked){
    color = "preto";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresOcho.checked){
    color = "preto";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && p.checked){
    color = "rosa";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && m.checked){
    color = "rosa";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && g.checked){
    color = "rosa";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && gg.checked){
    color = "rosa";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && u.checked){
    color = "rosa";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && p.checked){
    color = "vinho";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && m.checked){
    color = "vinho";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && g.checked){
    color = "vinho";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && gg.checked){
    color = "vinho";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && u.checked){
    color = "vinho";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked){
    color = "amarelo";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked){
    color = "azul";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked){
    color = "branco";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked){
    color = "cinza";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked){
    color = "laranja";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked){
    color = "verde";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked){
    color = "vermelho";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked){
    color = "preto";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked){
    color = "rosa";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked){
    color = "vinho";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "";
    size = "p";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "";
    size = "m";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "";
    size = "g";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "";
    size = "gg";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "";
    size = "u";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "";
    size = "36";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "";
    size = "38";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "";
    size = "40";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "";
    size = "42";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "";
    size = "44";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "";
    size = "46";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "";
    size = "";
    price = 4;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

price5.addEventListener('click' , () => {
  if(amarelo.checked && p.checked){
    color = "amarelo";
    size = "p";
   price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && m.checked){
    color = "amarelo";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && g.checked){
    color = "amarelo";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && gg.checked){
    color = "amarelo";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && u.checked){
    color = "amarelo";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresSeis.checked){
    color = "amarelo";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && tresOcho.checked){
    color = "amarelo";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCero.checked){
    color = "amarelo";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroDos.checked){
    color = "amarelo";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroCuatro.checked){
    color = "amarelo";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked && cuatroSeis.checked){
    color = "amarelo";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && p.checked){
    color = "azul";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && m.checked){
    color = "azul";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && g.checked){
    color = "azul";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && gg.checked){
    color = "azul";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && u.checked){
    color = "azul";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresSeis.checked){
    color = "azul";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && tresOcho.checked){
    color = "azul";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCero.checked){
    color = "azul";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroDos.checked){
    color = "azul";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroCuatro.checked){
    color = "azul";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked && cuatroSeis.checked){
    color = "azul";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && p.checked){
    color = "branco";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && m.checked){
    color = "branco";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && g.checked){
    color = "branco";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && gg.checked){
    color = "branco";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && u.checked){
    color = "branco";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresSeis.checked){
    color = "branco";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && tresOcho.checked){
    color = "branco";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCero.checked){
    color = "branco";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroDos.checked){
    color = "branco";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroCuatro.checked){
    color = "branco";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked && cuatroSeis.checked){
    color = "branco";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && p.checked){
    color = "cinza";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && m.checked){
    color = "cinza";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && g.checked){
    color = "cinza";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && gg.checked){
    color = "cinza";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && u.checked){
    color = "cinza";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresSeis.checked){
    color = "cinza";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && tresOcho.checked){
    color = "cinza";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCero.checked){
    color = "cinza";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroDos.checked){
    color = "cinza";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroCuatro.checked){
    color = "cinza";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked && cuatroSeis.checked){
    color = "cinza";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && p.checked){
    color = "laranja";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && m.checked){
    color = "laranja";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && g.checked){
    color = "laranja";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && gg.checked){
    color = "laranja";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && u.checked){
    color = "laranja";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresSeis.checked){
    color = "laranja";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && tresOcho.checked){
    color = "laranja";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCero.checked){
    color = "laranja";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroDos.checked){
    color = "laranja";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroCuatro.checked){
    color = "laranja";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked && cuatroSeis.checked){
    color = "laranja";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && p.checked){
    color = "verde";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && m.checked){
    color = "verde";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && g.checked){
    color = "verde";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && gg.checked){
    color = "verde";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && u.checked){
    color = "verde";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresSeis.checked){
    color = "verde";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && tresOcho.checked){
    color = "verde";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCero.checked){
    color = "verde";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroDos.checked){
    color = "verde";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroCuatro.checked){
    color = "verde";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked && cuatroSeis.checked){
    color = "verde";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && p.checked){
    color = "vermelho";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && m.checked){
    color = "vermelho";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && g.checked){
    color = "vermelho";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && gg.checked){
    color = "vermelho";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && u.checked){
    color = "vermelho";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresSeis.checked){
    color = "vermelho";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && tresOcho.checked){
    color = "vermelho";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCero.checked){
    color = "vermelho";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroDos.checked){
    color = "vermelho";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroCuatro.checked){
    color = "vermelho";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked && cuatroSeis.checked){
    color = "vermelho";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && p.checked){
    color = "preto";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && m.checked){
    color = "preto";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && g.checked){
    color = "preto";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && gg.checked){
    color = "preto";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && u.checked){
    color = "preto";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresSeis.checked){
    color = "preto";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && tresOcho.checked){
    color = "preto";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCero.checked){
    color = "preto";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroDos.checked){
    color = "preto";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroCuatro.checked){
    color = "preto";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked && cuatroSeis.checked){
    color = "preto";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && p.checked){
    color = "rosa";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && m.checked){
    color = "rosa";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && g.checked){
    color = "rosa";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && gg.checked){
    color = "rosa";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && u.checked){
    color = "rosa";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresSeis.checked){
    color = "rosa";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && tresOcho.checked){
    color = "rosa";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCero.checked){
    color = "rosa";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroDos.checked){
    color = "rosa";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroCuatro.checked){
    color = "rosa";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked && cuatroSeis.checked){
    color = "rosa";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && p.checked){
    color = "vinho";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && m.checked){
    color = "vinho";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && g.checked){
    color = "vinho";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && gg.checked){
    color = "vinho";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && u.checked){
    color = "vinho";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresSeis.checked){
    color = "vinho";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && tresOcho.checked){
    color = "vinho";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCero.checked){
    color = "vinho";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroDos.checked){
    color = "vinho";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroCuatro.checked){
    color = "vinho";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked && cuatroSeis.checked){
    color = "vinho";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(amarelo.checked){
    color = "amarelo";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(azul.checked){
    color = "azul";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(branco.checked){
    color = "branco";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cinza.checked){
    color = "cinza";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(laranja.checked){
    color = "laranja";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(verde.checked){
    color = "verde";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vermelho.checked){
    color = "vermelho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(preto.checked){
    color = "preto";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(rosa.checked){
    color = "rosa";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(vinho.checked){
    color = "vinho";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(p.checked){
    color = "";
    size = "p";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(m.checked){
    color = "";
    size = "m";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(g.checked){
    color = "";
    size = "g";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(gg.checked){
    color = "";
    size = "gg";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(u.checked){
    color = "";
    size = "u";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresSeis.checked){
    color = "";
    size = "36";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(tresOcho.checked){
    color = "";
    size = "38";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCero.checked){
    color = "";
    size = "40";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroDos.checked){
    color = "";
    size = "42";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroCuatro.checked){
    color = "";
    size = "44";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else if(cuatroSeis.checked){
    color = "";
    size = "46";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }else{
    color = "";
    size = "";
    price = 5;
    carregar.style.display = "none"
    filterDesktop(color,size,price)
  }
})

$('reset').addEventListener("click", () => {
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    mBox.classList.remove('checked')
    mBox.classList.add('flex')
    gBox.classList.remove('checked')
    gBox.classList.add('flex')
    ggBox.classList.remove('checked')
    ggBox.classList.add('flex')
    uBox.classList.remove('checked')
    uBox.classList.add('flex')
    tresSeisBox.classList.remove('checked')
    tresSeisBox.classList.add('flex')
    tresOchoBox.classList.remove('checked')
    tresOchoBox.classList.add('flex')
    cuatroCeroBox.classList.remove('checked')
    cuatroCeroBox.classList.add('flex')
    cuatroDosBox.classList.remove('checked')
    cuatroDosBox.classList.add('flex')
    cuatroCuatroBox.classList.remove('checked')
    cuatroCuatroBox.classList.add('flex')
    pBox.classList.remove('checked')
    pBox.classList.add('flex')
    carregar.style.display = "block"
    filterMobile("", "", 5, 6)
})

$('apply').addEventListener('submit', function(e) {
  e.preventDefault()
  $('filter-content').style.display = "none"
  $('container').style.display = "block"
  $('footer').style.display = "flex"
  $('filter-subtitle').style.display = "flex"
})

$('see-more').addEventListener('click', () => {
  let mostrarColor = document.querySelectorAll('#show-colours');
  for (let i = 0; i < mostrarColor.length; i++) {
    mostrarColor[i].classList.toggle('colorOcultar') 
    mostrarColor[i].classList.toggle('colorMostrar') 
  }
  
})
  