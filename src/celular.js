function celular(n){
 
  n = n.toLowerCase()
  n = n.toString()

  if (n.includes('a') || n.includes('b') || n.includes('c')){

    n = n.replace('a', '2');
    n = n.replace('b', '2');
    n = n.replace('c', '2');
  }

  if (n.includes('e')){
    n = n.replace('e', '3')
  }
  
  if(n.includes('d') || n.includes('e') || n.includes('f')) {    
    n = n.replace('d', '3')
    n = n.replace('e', '3')
    n = n.replace('f', '3')
  }
  if(n.includes('g') || n.includes('h') || n.includes('i')){

    n = n.replace('g', '4');
    n = n.replace('h', '4');
    n = n.replace('i', '4');
  }
  if(n.includes('j') || n.includes('k') || n.includes('l')) {
  
    n = n.replace('j', '5');
    n = n.replace('k', '5');
    n = n.replace('l', '5');
  }
  if(n.includes('m') || n.includes('n') || n.includes('o')) {
    n = n.replace('m', '6');
    n = n.replace('n', '6');
    n = n.replace('o', '6');
  }
  if(n.includes('p') || n.includes('q') || n.includes('r') || n.includes('s') ){
    n = n.replace('p', '7');
    n = n.replace('q', '7');
    n = n.replace('r', '7');
    n = n.replace('s', '7');
  }
  if(n.includes('t') || n.includes('u') || n.includes('v')) {
    n = n.replace('t', '8');
    n = n.replace('u', '8');
    n = n.replace('v', '8');
  }
  if(n.includes('w') || n.includes('x') || n.includes('y') || n.includes('z') ){
    n = n.replace('w', '9');
    n = n.replace('x', '9');
    n = n.replace('y', '9');
    n = n.replace('z', '9');   
  }

  nd = new Number(n)
  if (nd != NaN) {
   return n;
  }

  celular(n)
    
}
module.exports = celular
