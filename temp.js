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
