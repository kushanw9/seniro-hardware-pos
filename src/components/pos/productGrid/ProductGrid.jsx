import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onAddToCart }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};