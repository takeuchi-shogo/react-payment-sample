
import React from "react";


export default class PayjpPayment extends React.Component {
	constructor(props) {
		super(props)

		this.payjp = props.payjp

		this.elements = props.elements

		this.cardElement = props.cardElement
	}


	handleClick() {
		console.log('onClick')
		this.payjp.createToken(cardElement).then((res) => {
			if (res.error) {
				console.log(r.error.message)
				return
			} else {
				token = res.id
				console.log('token', token)
			}
		})
	}

	click() {
		console.log("click test success!")
	}

	componentDidMount() {
		if (!this.cardElement) {
			// this.cardElement = this.elements.create('card')
			console.log('cardElement',this.cardElement)
			this.cardElement.mount('#v2-demo')
		}
		this.cardElement.mount('#v2-demo')
	}

	render() {
		return (
			<div>
				<h1>Pay.jp!!!</h1>
				<p>{ this.props.payjpKey }</p>

				<form>
					<div id="v2-demo" class="payjs-outer"></div>
				</form>
				<button onClick={ this.handleClick }>トークン作成</button>
				<button onClick={ this.click }>Click Test!!</button>
			</div>
		)
	}
}