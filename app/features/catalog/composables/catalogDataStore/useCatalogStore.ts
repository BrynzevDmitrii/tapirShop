import { useFetch } from "nuxt/app";
import { CatalogData, Product } from "./types";
import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
export const useCatalogStore = defineStore('catalog-store', () => {

    const countPage: Ref<number> = ref(1);
    const listProducts: Ref<Product[]> = ref([]);
    const serverError: Ref<boolean> = ref(false);
    const finishList: Ref<boolean> = ref(false);

    const setCatalogData = async () => {
        try {

            const { data } = await useFetch('https://test-task-api.tapir.ws/products', {
                method: 'get',
                query: {
                    page: countPage.value,
                    limit: 10
                },
                server: true,
            });
            if (data.value.currentPage > data.value.totalPages) {
                finishList.value = true;
                return;
            }
            if (countPage.value === 1) {
                listProducts.value = data.value.products;
                return;
            }
            const products = (data.value as CatalogData).products as Product[];
            listProducts.value = [...listProducts.value, ...products];
            serverError.value = false;
        } catch (error) {
            serverError.value = true;
            console.log(error);
        }
    };

    const setNextPage = async () => {
        countPage.value++;
        await setCatalogData();
    };

    const setListProducts = (products: Product[]) => {
        listProducts.value = products;
    }

    const getCatalogData = computed(() => {
        return listProducts.value
    });

    const getPage = computed(() => {
        return countPage.value;
    });

    const getServerError = computed(() => {
        return serverError.value;
    });

    const getFinishList = computed(() => {
        return finishList.value;
    });

    return {
        listProducts,
        setCatalogData,
        getCatalogData,
        setNextPage,
        getPage,
        getServerError,
        getFinishList,
        setListProducts
    }
});