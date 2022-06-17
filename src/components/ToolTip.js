import React from 'react';
import TooltipInfo from './TooltipInfo';
import 'styles/Tooltip.scss';

export default function ToolTip({product, id, setId}) {
  const buttonClick = (productId) => {
    setId((curr) => curr === productId ? 0 : productId);
  };

  return (
    <div className='button-wrapper' style={{top: `${product.pointX*1.6}px`, left: `${product.pointY*1.6+15}px`, display: 'block'}} onClick={() => buttonClick(product.productId)}>
      {id === product.productId ? 
        <img src='https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png' alt='닫기 버튼' />
        :
        <img src='https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png' alt='돋보기 버튼' />
      }
      {id === product.productId && (
        <TooltipInfo product={product} />
        )
      }
    </div>
  );
}
