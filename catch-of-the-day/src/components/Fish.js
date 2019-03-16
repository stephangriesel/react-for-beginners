import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const fishResult = this.props.details;
        const isAvailable = fishResult.status === "available";
        // destructuring option: const { image, name } = this.props.details;
        return (
            <li className="menu-fish">
                <img src={fishResult.image} alt={fishResult.name} />
                <h3 className="fish-name">
                    {fishResult.name}
                    <span className="price">{formatPrice(fishResult.price)}</span>
                </h3>
                <p>{fishResult.desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
            </li>
            )
    }
}

export default Fish