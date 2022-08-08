
import React from "react";
import config from "./../config";
import KomojuPayment from "./Komoju";
import PayjpPayment from "./Payjp";
import Payment from './Payment'

export default class Layout extends React.Component {
	constructor() {
		super()

		this.state = {
			isShow: false, 
		}

		this.payjp = Payjp(config.payjpKey)

		this.elements = this.payjp.elements()

		this.cardElement = this.elements.create('card')
	}

	// componentDidMount() {
	// 	this.show()
	// }

	render() {
		return (
			<div>
				<button onClick={ () => this.setState({ isShow: !this.state.isShow }) }>押してね</button>
				<KomojuPayment message="テストです" komojuKey={ config.komojuKey }/>
				{ this.state.isShow && <PayjpPayment payjp={this.payjp} elements={this.elements} cardElement={this.cardElement} payjpKey={ config.payjpKey }/> }
				<Payment payjp={this.payjp} elements={this.elements} cardElement={this.cardElement} payjpKey={ config.payjpKey }/>
			</div>
		);
	}
}
