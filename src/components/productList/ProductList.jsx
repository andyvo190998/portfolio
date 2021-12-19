import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Lorem ipsum dolor sit.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur mollitia nihil facilis nemo doloribus deleniti natus excepturi veniam optio quidem!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => {
                    return (
                        <>
                            <Product key={item.id} img={item.img} link={item.link} />
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default ProductList
