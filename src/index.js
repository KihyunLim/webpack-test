// import 'babel-polyfill';
const {file, parse} = require('./globals');

function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  this.alert("Hmmm, this probably isn't a great idea...");

  console.log(file);
  parse();

  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    console.log("we retrived some data! AND we're confident it will work on a variety of browser distributions.");
    console.log(json);
  })
  .catch((error) => console.error('Something went wrong when fetching this data: ', error));
  