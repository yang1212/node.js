import React from 'react'
import IndexApp from './containers'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

render(
    <AppContainer>
      <IndexApp/>
    </AppContainer>,
    mountNode
);
if(module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept()
}
