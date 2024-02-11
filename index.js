
let szazalek = document.getElementById('szazalek')
let osszkolts = document.getElementById('osszkolts')
let vetitesi = document.getElementById('vetitesi')
let szamitott = document.getElementById('szamitott')

const button = document.getElementById('button')

let calc = function(){
    
    let temp = Math.round(osszkolts.value /(1+(szazalek.value/100)))

    vetitesi.innerHTML = temp.toLocaleString() + ' Ft';
    szamitott.innerHTML = (osszkolts.value - temp).toLocaleString() + ' Ft'

}

////run the calculation with button click
button.addEventListener('click', calc);

////masking the input fileds    
szazalek.addEventListener('keyup', function(){
    let n = parseInt(this.value);
    if (n > 100) {
        szazalek.value = 100
    };
    
}, false);

osszkolts.addEventListener('focusout', function(){
    let n = parseInt(this.value);
    console.log(n.toLocaleString());
    
}, false);