export const initialState = {
	basket: [
		{
			id: "12321341",
			title: "The Lean Startup",
			price: 11.96,
			rating: 5,
			image: "https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._AC_UL160_.jpg"
		}
	],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case 'REMOVE_FROM_BASKET':
			let newBasket = [ ...state.basket ];

			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if (index >= 0) {
				newBasket.splice(index, 1);
			}
			return {
				...state,
				basket: newBasket
			};
		default:
			return state;
	}
}

export default reducer;