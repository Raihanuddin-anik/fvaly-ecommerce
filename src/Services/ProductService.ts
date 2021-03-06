import { IProduct } from '../types';
import requests from './httpsService';

class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/product');
    }

    getMerchantsProducts(): Promise<any> {
        return requests.get('/merchant/products');
    }

    getProductByID(id: string): Promise<any> {
        return requests.get(`/product/${id}`);
    }

    addProduct(body: {}): Promise<any> {
        return requests.post(`/product/`, body);
    }

    updateProduct(id: string, body: {}): Promise<any> {
        return requests.post(`/product/${id}`, body);
    }

    deleteProduct(id: string): Promise<any> {
        return requests.delete(`/product/${id}`);
    }
}

export default new ProductService();
