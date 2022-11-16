import React, { useState } from 'react';
import { Filter } from '../types';

type Props = {
    onChange: (filter: Filter) => void;
}

const RatingFilter: React.FC<Props> = ({ onChange }) => {
    const [selected, setSelected] = useState<Set<number>>(() => new Set())

    function handleChange(rating: number, isChecked: boolean) {
        const draft = structuredClone(selected)
        if (isChecked) {
            draft.add(rating)
        } else {
            draft.delete(rating)
        }
        onChange(draft.size ? (products) => draft.has(products.rating) : null)
        setSelected(draft)
    }

    return (
        <div style={{ border: '1px solid white', padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4>Rating</h4>
            <ul>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <li key={rating} style={{listStyle: 'none'}}>
                        <label htmlFor='color' style={{ display: 'flex', gap: 12 }}>
                            <input onChange={(e) => handleChange(rating, e.target.checked)} type='checkbox' name='rating' value={rating} />
                            {'★'.repeat(rating).padEnd(5, '☆')}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingFilter;