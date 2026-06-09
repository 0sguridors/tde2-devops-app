function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

function calcular(op) {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  let res;
  if (op === 'soma') res = soma(a, b);
  else if (op === 'sub') res = subtracao(a, b);
  else if (op === 'mult') res = multiplicacao(a, b);
  else if (op === 'div') res = divisao(a, b);
  document.getElementById('result').textContent = 'Resultado: ' + res;
}

if (typeof module !== 'undefined') {
  module.exports = { soma, subtracao, multiplicacao, divisao };
}