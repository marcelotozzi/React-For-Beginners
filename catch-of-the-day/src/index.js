import React from 'react'
// importa só o metodo e não todo o react-dom
import { render } from 'react-dom'
import  { BrowserRouter, Match, Miss} from 'react-router'

// nao seria melhor importar dentro do component?
import './css/style.css'

import App from './components/App'
import NotFound from './components/NotFound'
import StorePicker from './components/StorePicker'

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'))

