const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 400, 80);   

const profile = () =>{
    document.getElementById('item1').innerHTML+= `<strong>Funkimoon</strong> <br /> Disenado por Fran`;};

    /*  `${profile()}<strong>Funkimoon</strong> <br /> Disenado por Fran`;}
    `${profile()}<strongFunkimoon</strong> <br /> Disenado por Fran`;},
 */
console.log(`${profile()}`)