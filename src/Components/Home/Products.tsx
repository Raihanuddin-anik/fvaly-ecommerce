import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsSkeleton from '../../Skeleton/ProductSkeleton';
import { IProduct } from '../../types';
import Product from '../common/Product';

interface IProps {
    products: IProduct[] | null;
    isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
    console.log(products);
    return (
        <div>
            <Container>
                {isLoading && <ProductsSkeleton />}
                {!isLoading && (
                    <Row>
                        {products?.map((product: IProduct) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default Products;
