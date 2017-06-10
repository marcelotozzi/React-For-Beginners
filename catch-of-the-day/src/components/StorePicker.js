import React from 'react'
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
	// constructor(){
	// 	super()
	// 	this.goToStore = this.goToStore.bind(this)
	// }
	goToStore(event){
		event.preventDefault()
		const storeId = this.storeInput.value
		console.log(`Going to ${storeId}`)
		this.context.router.transitionTo(`/store/${storeId}`)
	}
	render(){
		// Eita fi
		return (
		<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
			{/* Usar funcao no onSubmit no lugar do construtor */ }
			<h2>Please Enter A Store</h2>
			<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
			<button type="submit"> Visit Store -></button>
		</form>
	  ) 
	}
}

// usado para acessar o router, que esta no contexto por causa do BrowserRouter no index.js
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker