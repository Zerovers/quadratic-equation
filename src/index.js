module.exports = function solveEquation(equation) {
  let mass = [];
  let massQ = [];
  equation = equation.replace(/ /g, "");
  mass = equation.split('*x^2');
  let A = mass[0];   
  massQ = mass[1].split('*x');
  let B = massQ[0];
  let C = massQ[1];
  let a = parseInt(A, 10);
  let b = parseInt(B, 10);
  let c = parseInt(C, 10);
  let D = b * b - 4*a*c;
  let x1 = (-b - Math.sqrt(D)) / (2 * a); 
  let x2 = (-b + Math.sqrt(D)) / (2 * a);
  return [ Math.round(x2) , Math.round(x1) ].sort((a,b) => a - b);
}
