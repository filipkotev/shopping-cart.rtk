import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  return <>
    <Modal />
    <Navbar />
    <CartContainer />
  </>
}
export default App;
