import { Card } from "react-bootstrap";
import { Button } from "bootstrap";



const ItemDetail = ({nombre, marca, precio, imagen, stock}) => {
    return (
        <Card className="text-center">
        <Card.Header>{nombre}</Card.Header>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>${precio}</Card.Title>
          <Card.Text>{marca}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">solo quedan {stock}</Card.Footer>
      </Card>
    )
}

export default ItemDetail;


