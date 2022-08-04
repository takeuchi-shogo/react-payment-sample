
import React from "react";


export default class PayjpPayment extends React.Component {
	constructor(props) {
		super(props)

		this.payjp = props.payjp

		this.elements = props.elements

		this.cardElement = props.cardElement
	}


	handleClick() {
		// payjp.createToken(cardElement).then((r) => {
		// 	if (r.error) {
		// 		// errorMessage = r.error.message
		// 	} else {
		// 		token = r.id
		// 		console.log(r)
		// 	}
		// })
	}

	componentDidMount() {
		if (!this.cardElement) {
			// this.cardElement = this.elements.create('card')
			console.log('cardElement',this.cardElement)
			this.cardElement.mount('#v2-demo')
		}
		this.cardElement.mount('#v2-demo')
	}

	componentWillUnmount() {
		// this.cardElement = null
		console.log(this.cardElement)
	}

	render() {
		return (
			<div>
				<h1>Pay.jp!!!</h1>
				<p>{ this.props.payjpKey }</p>

				<form>
					<div id="v2-demo" class="payjs-outer"></div>
					<button onClick={ this.handleClick }>トークン作成</button>
				</form>
			</div>
		)
	}
}