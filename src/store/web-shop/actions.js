import {categoryResource, productResource, productsResource} from "../../api/index";

const actions = {
    async loadCategories({commit}) {
        return categoryResource.get()
            .then(response => {
                let {items} = response.body;
                commit("setCategories", items);
            });
    },
    async loadProduct({commit}, productId) {
        return productResource.get({productId})
            .then(response => {
                let {items} = response.body;
                commit("setProduct", items[0]);
            });
    },
    async loadProducts({commit}, categoryId) {
        return productsResource.get({categoryId})
            .then(response => {
                let {items} = response.body;
                commit("setProducts", items);
            });
    },
};

export default actions;