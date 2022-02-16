import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCardData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-learn-http-65e9f-default-rtdb.firebaseio.com/redux-cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data faild!");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch({
        status: "error",
        title: "Error!",
        message: "Sending cart data faild!",
      });
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-learn-http-65e9f-default-rtdb.firebaseio.com/redux-cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data faild!");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data faild!",
        })
      );
    }
  };
};
