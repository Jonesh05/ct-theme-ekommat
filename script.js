const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 400, 80);   



var arrayItems  = new Array();
var arrayValue = new Array();
var arrayColor   = new Array();

arrayItems[0] = "item1";
arrayItems[1] = "item2";
arrayItems[2] = "item3";

arrayValue[0] = "25000";
arrayValue[1] = "35000";
arrayValue[2] = "45000";

arrayColor[0] = "green";
arrayColor[1] = "magenta";
arrayColor[2] = "red";

var datos  = [];
var objeto = {};

const profile = () =>{

   datos.push({ 
        "items"       :  arrayItems[i],
        "precio"     :  arrayValue[i],
        "color"       :  arrayColor[i] 
    });


objeto.datos = datos;
console.log(datos)
console.log(JSON.stringify(objeto));

// $("#res").text(JSON.stringify(objeto));


    var repet = document.getElementsByClassName('item');
    var items = arrayItems[i];
    for(var i= 0; i < arrayItems.length; i++)
    console.log(this.items)     
        ( i =>{
         
        repet[i].onClick = () => {
            this.innerHTML +=  
            items[i] +     
        `<p class="card-text"><strong>${i.datos().precio + "$"} <br /></strong></p>
        <button onclick="agregarCarrito()" type="button" class="btn btn-success">Agregar al carrito  
          <span class="fas fa-shopping-cart"></span>
        </button> <br /><strong>Funkimoon</strong> <br /> Disenado por Fran`;
        }
    });
     //  repet[0].innerHTML+=
    /* for(var i=0;i<repet.length;i++)
    {
        repet[i].innerHTML += 
        `<p class="card-text"><strong>25000</strong></p>
        <button onclick="mostrarNombre(1)" type="button" class="btn btn-success">Agregar al carrito  
          <span class="fas fa-shopping-cart"></span>
        </button> <br /><strong>Funkimoon</strong> <br /> Disenado por Fran`;
        // or you can dynamically insert different text too    
    } */
};
    console.log(`${profile()}`)
    //  `${profile()}<strong>Funkimoon</strong> <br /> Disenado por Fran`;}
   /* `${profile()}<strongFunkimoon</strong> <br /> Disenado por Fran`;}, 
 */
