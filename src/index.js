import _ from 'lodash';

function component() {
  const elememt = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  elememt.innerHTML = _.join(['Hello', 'webpack'], ' ');
  elememt.appendChild(br);
  elememt.appendChild(button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;

    print();
  });

  return elememt;
}

document.body.appendChild(component());