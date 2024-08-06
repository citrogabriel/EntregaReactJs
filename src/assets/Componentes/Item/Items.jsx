import { Button } from "react-bootstrap";
import { Card }from "react-bootstrap";
import { Link } from "react-router-dom";
 



const Items = ({ product }) => {product.isStar = true
    return (
        <Card style={{ width: '9rem' }} className='m-2'>
            <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Link to={`/product/${product.id}`} >
                    <Button variant="primary">Detail</Button>
                  </Link>
            </Card.Body>
        </Card>
    );
};

export default Items;



