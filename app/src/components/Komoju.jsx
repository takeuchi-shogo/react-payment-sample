
import React from "react";


export default class KomojuPayment extends React.Component {

	constructor(props) {
		super(props)
		this.payform = document.getElementById('pay-form')

		this.handler = Komoju.multipay.configure({
			key: props.komojuKey,
			token: function(token) {
				payForm.komojuToken.value = token.id
				payForm.submit()
			}
		})
	}

	handleClick() {
		console.log('kkkk')
		this.handler.open({
			amount:       1000,
			endpoint:     "https://komoju.com",
			locale:       "ja",
			currency:     "JPY",
			title:        "<商品名>",
			description:  "<商品説明>",
			methods: [
				"credit_card","konbini","bank_transfer","pay_easy","web_money","bit_cash","net_cash","japan_mobile","paypay","linepay","merpay","rakutenpay","nanaco","dospara","steam_prepaid_card"
			]
		})
	}

	click() {
		console.log('click!!')
	}

	render() {
		return (
			<div>
				<h1>Komoju!!!</h1>
				<p>{ this.props.message }</p>
				<p>{ this.props.komojuKey }</p>

				<form id="pay-form">
					<input type="text" name="komojuToken"/>	
				</form>
				<button id="customButton" onClick={() => this.handleClick() }>今すぐ支払い</button>

				<button onClick={ this.click }>test</button>
			</div>
		)
	}
}