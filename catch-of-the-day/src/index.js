import React from 'react'
// importa só o metodo e não todo o react-dom
import { render } from 'react-dom'
// nao seria melhor importar dentro do component?
import './css/style.css'

import App from './components/App'
import StorePicker from './components/StorePicker'

render(<App/>, document.querySelector('#main'))