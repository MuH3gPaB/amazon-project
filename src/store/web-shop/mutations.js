import Vue from "vue";

const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
    },
    setProducts(state, products) {
        state.products = products;
    },
    setProduct(state, product) {
        state.product = product;
    },
    addToCart(state, product) {
        let cart = state.cart;
        let id = product.id;

        if (cart[id]) {
            let entry = cart[id];
            entry.quantity = entry.quantity + 1;
            entry.entryPrice = entry.unitPrice * entry.quantity;
        } else {
            Vue.set(cart, id, {
                id: id,
                name: product.name,
                iconUrl: product.thumbnailUrl,
                quantity: 1,
                unitPrice: product.price,
                entryPrice: product.price
            });
        }
    },
    deleteFromCart(state, entryId) {
        Vue.delete(state.cart, entryId);
    },
    clearCart(state) {
        Vue.set(state, "cart", {});
    }
};

export default mutations;
