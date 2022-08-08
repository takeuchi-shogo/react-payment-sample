
import React, { useEffect } from 'react'


const Payment = (props) => {

	// const payjpKey = props.payjpKey
	const payjp = props.payjp
	const elements = props.elements
	const cardElement = props.cardElement

	useEffect(() => {
		console.log('test1', props.payjp)
		if (cardElement) {
			cardElement.mount('#v2-demo')
		}
	})

	const handleClick = () => {
		console.log('payjp', payjp)
		payjp.createToken(cardElement).then((res) => {
			if (res.error) {
				console.log(r.error.message)
				return
			} else {
				console.log('token', res.id)
			}
		})
	}

	const click = () => {
		console.log('test test')
	}

	return (
		<div>
				<h1>Pay.jp!!!</h1>
				<p>{ props.payjpKey }</p>

				<form>
					<div id="v2-demo" class="payjs-outer"></div>
				</form>
				<button onClick={ handleClick }>トークン作成</button>
				<button onClick={ click }>Click Test!!</button>
			</div>
	)
}


export default Payment