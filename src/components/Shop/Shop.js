import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

class Shop extends React.Component {

    state = {
        collections: SHOP_DATA
    };

    render() {

        const collections = this.state.collections;
        
        return (
            <div className="shop">
                {
                    collections.map(({id, ...properties}) => (
                        <CollectionPreview key={id} {...properties} />
                    ))
                }
            </div>
        );
    }
}


export default Shop;