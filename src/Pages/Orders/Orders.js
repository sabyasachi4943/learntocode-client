import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";
import { getStoredCart } from "../../utilities/fakedb";

const Orders = () => {
  const { setCart, products, cart } = useContext(CartContext);

  const { user } = useContext(AuthContext);
  console.log(cart, products);
  const [courses, setCourses] = useState([]);
  const [bought, setBought] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    fetch(`https://learntocode-server.vercel.app/allcontents`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
    for (const id in storedCart) {
      const addedProduct = courses.find((course) => course._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    console.log(storedCart);
    setBought(savedCart);
  }, [bought]);

  return (
    <div>
      <div>
        <h4>Username is: {user?.displayName}</h4>
        <h5>User email is: {user?.email}</h5>
      </div>
      <span className="fs-2 fw-bold">Bought Courses: </span>
      {bought?.map((course) => (
        <p>{course.term}</p>
      ))}
    </div>
  );
};

export default Orders;
