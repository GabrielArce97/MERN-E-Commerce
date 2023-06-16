import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/Product';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import ProductItem from './ProductItem';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <LoadingBox />}
      {
        <Row>
          {data.map((product: Product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      }
    </div>
  );
};

export default Products;
