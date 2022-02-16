import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartBtn = () => {
    dispatch(uiActions.showCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartBtn}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
