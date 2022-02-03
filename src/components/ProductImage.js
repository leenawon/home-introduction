import React from 'react';
import 'styles/ProductImage.scss';

export default function ProductImage({product, id, setId}) {
  const imageClick = (productId) => {
    setId((curr) => curr === productId ? 0 : productId);
  };

  return (
    <div className={id === product.productId ? 'product-image point-border' : 'product-image'} onClick={() => imageClick(product.productId)}>
      <div style={{backgroundImage: `url(${product.imageUrl})`}}>
        {!product.outside && 
          <div className='discount-badge'>
            {product.discountRate} 
            <span>%</span>
          </div>
        }
      </div>
    </div>
  );
}
