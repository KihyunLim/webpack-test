import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env.NODE_ENV, ' Looks like we are in development mode!');
} else {
  console.log('prd!!');
}

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!', 
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());