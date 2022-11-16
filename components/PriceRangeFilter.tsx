import React, { useState } from 'react';
import { Filter } from '../types';

type Props = {
    onChange: (filter: Filter) => void;
}

const PriceRangeFilter: React.FC<Props> = ({ onChange }) => {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)

    function handleChangeMin(value: number) {
        setMin(value)
        onChange(value ? (products) => products.price <= max && products.price >= value : null)
    }

    function handleChangeMax(value: number) {
        setMax(value)
        onChange(value ? (products) => products.price >= min && products.price <= value : null)
    }

    return (
        <div style={{ border: '1px solid white', padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4>Price</h4>
            <ul>
                <li style={{ listStyle: 'none' }}>
                    <label htmlFor='color' style={{ display: 'flex', gap: 12 }}>
                        Minimo
                        <input onChange={(e) => handleChangeMin(Number(e.target.value))} type='number' name='priceMin' value={min} />
                    </label>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <label htmlFor='color' style={{ display: 'flex', gap: 12 }}>
                        Maximo
                        <input onChange={(e) => handleChangeMax(Number(e.target.value))} type='number' name='priceMin' value={max} />
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default PriceRangeFilter;