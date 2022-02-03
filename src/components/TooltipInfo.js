import React from 'react';
import 'styles/TooltipInfo.scss';

export default function TooltipInfo({product, id}) {
  return (
    <span className={id === product.productId ? 'tooltip' : 'hide'}>
      <div className='tooltip-image' style={{backgroundImage: `url(${product.imageUrl})`}}></div>
      <div className='description'>
        <span className='tooltip-name'>{product.productName}</span>
        <div className='tooltip-price'>
          <div className='price'>
            <span className={!product.outside ? '' : 'expect-price'}>{!product.outside ? `${product.discountRate}%` : '예상가'}</span>
            {!product.outside ? product.priceDiscount.toLocaleString() : product.priceOriginal.toLocaleString()}
          </div>
        </div>
      </div>
      <div className='move-icon'>
        <img src='https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png' alt='이동하기 아이콘'/>
      </div>
    </span>
  );
}
