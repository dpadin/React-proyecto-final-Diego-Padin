
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import "./ItemDetail.css"

const ItemDetail = ({name, img, description, stock, category, id, price}) => {
  //const {addItem, isInCart} = useContext(CartContext)
  const {addItem, isInCart} = useCart();
  const {setNotification} = useNotification()



  const handleAdd = (count) => {
     
    const produtObj = {
      id, name, price, quantity: count
    } 
    addItem(produtObj)
    setNotification("success", `Se agregaron ${count} de ${name}`);
    //setQuantity(cantidad)
  }
  
  return (
    <article>
      <h2 className="TitleStyle">  {name}</h2>
      <div className="card">
        <img
          src={img}
          style={{ width: 200 }}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">Descripcion: {description}</p>
          <p className="card-text">Rubro:   Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>
      <div className="FinalizarContainer">
      {
        isInCart(id) ? (
          <Link to='/cart' className="BtnComprar">Finalizar Compra</Link>
        ): (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )
      }
      </div>
    </article>
  );
}

export default ItemDetail
