const getters = {
    isCategoryExist(state) {
        return (id) => state.categories.findIndex(category => String(category.id) === id) !== -1;
    },
    getCartTotal(state) {
        let cart = state.cart;
        return Object.keys(cart).reduce((sum, key) => {
            let entry = cart[key];
            return sum + entry.entryPrice;
        }, 0);
    }
};

export default getters;