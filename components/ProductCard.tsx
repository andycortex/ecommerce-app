import React from 'react';
import { Products } from '../types';

type Props = {
    products: Products
}
const ProductCard: React.FC<Props> = ({products}) => {
    return (
        <div style={{ border: '1px solid white', padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img src={products.image} alt={products.name}/>
            <h3>{products.name}</h3>
            <p>Valoracion: {'★'.repeat(products.rating).padEnd(5, '☆')}</p>
            <p>{products.price.toLocaleString('es-BO',{style: 'currency', currency: 'BOB'})}</p>
        </div>
    );
};

export default ProductCard;