export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
};

export interface CatalogData {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    products: Product[];
};