import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

const storeId = "58958138";
const token = "public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD";
const apiRoot = `https://app.ecwid.com/api/v3/${storeId}`;

Vue.http.interceptors.push((request, next) => {
    request.headers = request.headers || {};
    request.headers.set("Authorization", "Bearer " + token);
    next();
});

export const productsResource = Vue.resource(apiRoot + "/products?category={categoryId}");
export const productResource = Vue.resource(apiRoot + "/products?productId={productId}");
export const categoryResource = Vue.resource(apiRoot + "/categories")

