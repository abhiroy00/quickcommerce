import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { FaInfoCircle, FaStar, FaTag, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Cart() {
  const cartitem = useSelector((state) => state.productdata);
  console.log("cart item", cartitem);

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={8} className="bg-white">
            {cartitem.map((product, index) => (
              <div
                key={index}
                className="container mx-auto p-4 border rounded-lg shadow-md mt-3 bg-white flex items-start space-x-4"
              >
                {/* Product Image */}
                <div className="w-1/6">
                  <img
                    src={product.image}
                    alt="Product"
                    className="rounded-md"
                  />
                  <div className="flex items-center border rounded-md overflow-hidden mt-3">
                    <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300">
                      -
                    </button>
                    <span className="px-3 py-1">1</span>
                    <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300">
                      +
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="w-2/3 space-y-1">
                  <h5 className="font-bold text-lg">{product.title}</h5>
                  <p className="text-gray-500 text-sm">Size: M</p>
                  <p className="text-gray-500 text-sm">
                    Seller:{" "}
                    <span className="font-medium">{product.category}</span>{" "}
                    <span className="text-blue-600 font-semibold">Assured</span>
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 line-through text-sm">
                      ₹1,299
                    </span>
                    <span className="text-xl font-bold text-black">
                      {product.price}
                    </span>
                    <span className="text-green-600 text-sm">78% Off</span>
                    <span className="text-green-600 text-sm">
                      1 offer available
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Rating{" "}
                    <span className="font-medium">{product.rating.rate}</span> |{" "}
                    <span className="">{product.rating.count}</span>{" "}
                    <span className="text-green-600">count</span>
                  </p>
                  <div className="flex space-x-2 text-sm">
                    <button className="text-black text-base hover:underline font-semibold">
                      SAVE FOR LATER
                    </button>
                    <button className="text-black text-base hover:underline font-semibold">
                      REMOVE
                    </button>
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="w-1/6 flex flex-col items-end space-y-2">
                  <p className="text-gray-500 text-sm">
                    Delivery by <span className="font-medium">Thu Jan 9</span> |{" "}
                    <span className="line-through text-gray-400">₹40</span>{" "}
                    <span className="text-green-600">Free</span>
                  </p>
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-end my-4">
              <Button
                variant="warning"
                size="lg"
                style={{
                  borderRadius: "2px",
                  color: "#fff",
                  fontSize: "16px",
                  backgroundColor: "#ff6500",
                  display: "block",
                }}
              >
                <span className="ps-1">PLACE ORDER</span>
              </Button>
            </div>
          </Col>
          <Col md={4} className="bg-white mt-3">
            <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
              {/* Title */}
              <h5 className="text-gray-600 font-bold text-lg mb-4">
                PRICE DETAILS
              </h5>

              {/* Price Breakdown */}
              <div className="space-y-2 text-gray-700">
                {/* Price */}
                <div className="flex justify-between">
                  <span>Price (3 items)</span>
                  <span>₹3,797</span>
                </div>

                {/* Discount */}
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">– ₹2,868</span>
                </div>

                {/* Delivery Charges */}
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>
                    <span className="line-through text-gray-400">₹120</span>{" "}
                    <span className="text-green-600">Free</span>
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-3 border-t border-gray-200" />

              {/* Total Amount */}
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span>₹929</span>
              </div>

              {/* Savings Message */}
              <p className="text-green-600 mt-3 text-sm text-center font-medium">
                You will save ₹2,868 on this order
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
