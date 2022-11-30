import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h4>Username is: {user?.displayName}</h4>
      <h5>User email is: {user?.email}</h5>
    </div>
  );
};

export default Checkout;
