import { Button, Card } from 'react-bootstrap';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top product-image" alt={product.title} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating
          rating={product.rating.rate}
          numReviews={product.rating.count}
        />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
export default ProductItem;
