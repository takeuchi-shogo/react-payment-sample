
import React, { useState } from "react";


const KomojuPayment = (props) => {

	const count = 100

	const handler = Komoju.multipay.configure({
		key: props.komojuKey,
		token: (token) => {
			let payform = document.getElementById('payform')
			payform.komojuToken.value = token.id;
			console.log('token', token.id)
			payform.submit()
		}
	})

	const handleClick = () => {
		console.log('kkkk', handler.key, count)
		handler.open({
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

	return (
		<div>
				<h1>Komoju!!!</h1>
				<p>{ props.message }</p>
				<p>{ props.komojuKey }</p>

				<form id="payform">
					<input type="hidden" name="komojuToken"/>	
				</form>
				<button id="customButton" onClick={ handleClick }>今すぐ支払い</button>

				{/* <button onClick={ this.click }>test</button> */}
			</div>
	)
}

export default KomojuPayment
