import Banner from '../../Components/Home/Banner';
import Products from '../../Components/Home/Products';
import useAsync from '../../Hooks/useAsync';
import ProductService from '../../Services/ProductService';

const Home = () => {
    const { data, isLoading } = useAsync(ProductService.getProducts);

    return (
        <div>
            <Banner />
            <Products isLoading={isLoading} products={data} />
        </div>
    );
};

export default Home;
