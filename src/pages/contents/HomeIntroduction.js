import React, { useState } from 'react';
import useFetch from 'hooks/useFetch';
import ToolTip from 'components/ToolTip';
import ProductImage from 'components/ProductImage';
import 'styles/HomeIntroduction.scss';

export default function HomeIntroduction() {
  const data = useFetch(process.env.REACT_APP_API_URL);
  const productList = data.productList;
  const [id, setId] = useState(0);

  return (
    <>
      {data &&
        <div className='container'>
          <h1 className='title'>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</h1>
          <div className='main-image'>
            {data.imageUrl && <img src={data.imageUrl} alt='방 이미지' />}
            {productList && productList.map((product) => (
              <ToolTip key={product.productId} product={product} id={id} setId={setId} />
            ))}
          </div>
          <div className='product-images-wrapper'>
            <div className='product-images'>
              {productList && productList.map((product) => (
                <ProductImage key={product.productId} product={product} id={id} setId={setId} />
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}
