const prompt = require('prompt-sync')();
/*

//challenge 1
let tab1 = [1 , 2 , 3 , 4 , 5 , 6];
for( let i = 0; i < tab1.length ;i++ ){
    console.log(tab1[i]);
}
    //challenge 2
let a = parseInt(prompt("entrez des nombre:"));

let tab = [ ];
for(let i = 0; i < a ; i++ ){
    let m = prompt(`Entrez l'élément n°${i + 1} :`);
    tab.push(m);
}
console.log ("tableau:");
console.log(tab);


//challenge 3
let a = parseInt(prompt("entrez des tab nombre:"));

let tab2 = [];

for(let i = 0; i <= a; i++){
    
tab2.push(v);
// let somme = 
} 
} 

let c = parseInt(prompt("entrez nombre de calculation:")); 
let tableau = [];
let somme = 0;

for(i = 0 ; i < c; i++ ){
    
let v = prompt("entrez de number:"+1+i); 
tableau.push(v);
somme += tableau
}
console.log(somme)

//challenge 4
let tab = [ 1,2,3];

let max = tab[0];
for ( let i = 0 ; i < tab.length ;i++ ){
    if (max < tab[i] ){
        max = tab[i]
        
    }
}
console.log(max)

//challenge 5

//let c = parseInt(prompt("entrez nombre de calculation:")); 

//let tab = [];

//for (i = 0 ; i > ){
    
let a = Number(prompt("donnez nombre:"));
let tab = [];
//let tab = [ 1,2,3,4,5];
let min = 1;
tab.push();
for( let i = 1;i > tab.length; i--){
    if(min < tab[i]){
        min = tab[i]
    } 
}
console.log(min);
//challenge 6
let a = Number(prompt("entrez nombre:"));
let tabz = [] 

for(let i = 0; i < a ; i++ ) {
    let ask = Number(prompt(`the number ${ i + 1  } :`))
   let ask2 = Number(prompt(`fach :`))
   let result = ask * ask2
   tabz.push(result)
}
console.log(tabz);
*/
//challenge 7

let up = Number(prompt("entrez gruop de nombre :"));
let h = [];
let r= 0
for(let i = 0 ; i < up ; i++){
    let n = Number(prompt("entrez nombre :"));
h.push(n);}
  
   if(r > h[i+1]){
    r=h[i]
    h[i]=h[i+1]
    h[i+1]=r;

 
    
    
//
    
}
    console.log( h);




