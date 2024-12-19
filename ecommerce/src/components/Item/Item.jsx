import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({product}) => {
    //console.log(product)
    
//style={{ width: "18rem" }}

  return (
    <div className="card card-size img-sizing" >
      <img
        src={product.img}
        style={{ width: 100, margin: "0 auto" }}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <Link to={`/detail/${product.id}`} className="btn btn-primary btn-custom">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item
