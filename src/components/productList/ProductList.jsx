import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">
                    Please go to my github page to see more detail
                </p>
                <Button  variant="contained" target="_blank" href="https://github.com/andyvo190998?tab=repositories">
                    My Github Repository
                </Button>
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
