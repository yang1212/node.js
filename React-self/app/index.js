import React from 'react'
import IndexApp from './containers'
import {render} from 'react-dom'

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

render(
    <IndexApp/>,
    mountNode
);
