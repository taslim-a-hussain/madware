import React from 'react';
import './Directory.scss';
import '../MenuItem/MenuItem';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {

    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
            }
        ]
    };

    render() {
        return (
            <div className="directory">
                {
                    this.state.sections.map(({id, ...section}) => (
                            <MenuItem key={id}  {...section}/>
                       ))
                }
            </div>
        );
    }
} 


export default Directory;