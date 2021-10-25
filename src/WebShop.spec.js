import {beforeEach, describe, it, jest, expect} from "@jest/globals";
import WebShop from './WebShop';
import WebShopStore from './store';
import {createLocalVue, mount} from "vue-test-utils";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './routes';

function mockStore(store) {
    let mockedModule = {actions: {}, getters: {}, state: {}, mutations: {}};
    Object.keys(store.actions || []).forEach(key => mockedModule.actions[key] = jest.fn());
    Object.keys(store.getters || []).forEach(key => mockedModule.getters[key] = jest.fn());
    Object.keys(store.state || []).forEach(key => mockedModule.state[key] = store.state[key]);
    Object.keys(store.mutations || []).forEach(key => mockedModule.state[key] = store.state[key]);
    return mockedModule;
}

describe('WebShop', () => {
    let localVue;
    let store;
    let wrapper;


    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        store = mockStore(WebShopStore);
        store.state.categories = testCategories();
        store.state.products = testProducts();
        store.getters.isCategoryExist.mockReturnValue(() => true);
        store.actions.loadProducts.mockReturnValue(() => Promise.resolve());

        wrapper = mount(WebShop, {
            localVue,
            store: new Vuex.Store(store),
            router: new VueRouter({mode: 'history', routes})
        });
    });

    it('should match snapshot', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    });
});

function testCategories() {
    return [
        {
            id: "104994286",
            thumbnailUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208495045.jpg",
            name: "Шерсть"
        },
        {
            id: "104994287",
            thumbnailUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg",
            name: "Хлопок"
        }
    ];
}

function testProducts() {
    return [
        {
            id: "344134461",
            name: "ОБРАЗЕЦ. Цветочный топ",
            defaultDisplayedPriceFormatted: "1 395.00₽",
            thumbnailUrl: "https://d2j6dbq0eux0bg.cloudfront.net/default-store/jade_tank_400px.jpg"
        },
        {
            id: "344134462",
            name: "ОБРАЗЕЦ. Черный топ",
            defaultDisplayedPriceFormatted: "1 295.00₽",
            thumbnailUrl: "https://d2j6dbq0eux0bg.cloudfront.net/default-store/black_tank_400px.jpg"
        },
        {
            id: "344134466",
            name: "ОБРАЗЕЦ. Белый топ",
            defaultDisplayedPriceFormatted: "1 495.00₽",
            thumbnailUrl: "https://d2j6dbq0eux0bg.cloudfront.net/default-store/white_tank_400px.jpg"
        }
    ];
}
