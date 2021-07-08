import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout__ad"
                src="https:images-na.ssl-images-amazon.com/images/"
                alt=""
            />
        </div>
    )
}

export default Checkout;
