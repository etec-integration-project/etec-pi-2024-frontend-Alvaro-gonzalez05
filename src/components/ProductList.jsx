import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../data';
import { Zoom } from 'react-awesome-reveal';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        };
        loadProducts();
    }, []);

    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setAllProducts(products);
        } else {
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setAllProducts([...allProducts, product]);
        }
    };

    if (products.length === 0) {
        return <p>Cargando productos...</p>;
    }
	return (
		<div className='container-items'>
			{products.map(product => (
				<Zoom cascade ><div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div></Zoom>
			))}
		</div>
	);
};
