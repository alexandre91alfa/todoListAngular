const fetch = require("node-fetch");

const funcAsyn = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/20");
  const data = await response.json();
  return data;
};

const result = funcAsyn();
result
  .then(result => {
    console.log(result);
  })
  .catch(err => {});

function firstToUpper(value) {
  const vAux = value.trim();
  let vAux2 = vAux[0].toUpperCase();
  vAux2 += vAux.substring(1);
  return vAux2;
}

console.log(firstToUpper("alexandre jose"));
