import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'
const CollectionPreview = ({title, items}) =>(
   
    <div className = 'collection-preview'>
        <h1 className= 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {/*idx = index, filter items to only contain x amount of values */}
            {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherItemProps})=>(
                <CollectionItem key={id}{...otherItemProps} />
             ))}
        </div>
    </div>
    
);

export default CollectionPreview;