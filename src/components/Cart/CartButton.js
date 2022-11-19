import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuan = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuan}</span>
    </button>
  );
};

export default CartButton;
