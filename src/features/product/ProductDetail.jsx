import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { FaInfoCircle, FaStar, FaTag, FaShoppingCart } from "react-icons/fa";

function Productdetail() {
  return (
    <div className="bg-slate-100" style={{ height: "100vh" }}>
      <Container className="bg-white py-5 my-5">
        <Row>
          <Col className="p-3" md={4}>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
            <div className="mt-3 flex justify-content-around gap-2">
              <Button
                className="w-100"
                variant="warning"
                size="lg"
                style={{
                  borderRadius: "2px",
                  color: "#fff",
                  fontSize: "16px",
                  display: "block",
                }}
              >
                <FaShoppingCart className="text-md cursor-pointer hover:text-gray-400 inline-block" />
                <span className="ps-1">ADD TO CART</span>
              </Button>
              <Button
                className="w-100"
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
                <FaShoppingCart className="text-md cursor-pointer hover:text-gray-400 inline-block" />
                <span className="ps-1">BUY NOW</span>
              </Button>
            </div>
          </Col>
          <Col className="p-3">
            <h6>Green Flair</h6>
            <h4>Men Regular Fit Printed Spread Collar Casual Shirt</h4>
            <span className="text-green-700">Special price</span>
            <h1 className="mb-0">
              &#8377; 359
              <span className="text-xl	text-slate-400 ps-4">
                <strike>&#8377; 1499</strike>
              </span>
              <span className="text-2xl	text-green-500 ps-4">76% off</span>
              <span className=" ps-4">
                <FaInfoCircle className="text-2xl cursor-pointer text-gray-400 hover:text-gray-200 inline-block" />
              </span>
            </h1>
            <div className="mt-4 flex justify-start align-items-center">
              <div className="rounded-2xl bg-green-700 text-white py-1 px-2 text-xl ms-2">
                3.9
                <FaStar className="text-sm cursor-pointer text-white hover:text-gray-200 inline-block align-middle ms-1" />
              </div>
              <div className="ms-3 font-bold">
                47,015 ratings and 1,636 reviews
              </div>
              <div>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                  className="w-10 ms-3"
                />
              </div>
            </div>
            <div>
              <div className="flex mt-4 ">
                <div>
                  <h6 className="text-slate-500">Color</h6>
                </div>{" "}
                <Row className="w-100 ps-5">
                  <Col md={1}>
                    <div className="w-10 h-10  bg-red-700 text-center leading-9 font-bold"></div>
                  </Col>
                  <Col md={1}>
                    <div className="w-10 h-10  bg-green-700 text-center leading-9 font-bold"></div>
                  </Col>
                  <Col md={1}>
                    <div className="w-10 h-10  bg-yellow-700 text-center leading-9 font-bold"></div>
                  </Col>
                  <Col md={1}>
                    <div className="w-10 h-10  bg-orange-700 text-center leading-9 font-bold"></div>
                  </Col>
                  <Col md={1}>
                    <div className="w-10 h-10  bg-slate-700 text-center leading-9 font-bold"></div>
                  </Col>
                  <Col md={1}>
                    <div className="w-10 h-10  bg-green-700 text-center leading-9 font-bold"></div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="flex mt-4">
              <h6 className="text-slate-500">Size</h6>
              <Row className="w-100 ps-5">
                <Col md={1} className="align-middle justify-center">
                  <div className="w-10 h-10  border-spacing-1 border-2 border-slate-400 text-center leading-9 font-bold">
                    S
                  </div>
                </Col>
                <Col md={1} className="align-middle justify-center">
                  <div className="w-10 h-10  border-spacing-1 border-2 border-slate-400 text-center leading-9 font-bold">
                    M
                  </div>
                </Col>
                <Col md={1} className="align-middle justify-center">
                  <div className="w-10 h-10  border-spacing-1 border-2 border-slate-400 text-center leading-9 font-bold">
                    L
                  </div>
                </Col>
                <Col md={1} className="align-middle justify-center">
                  <div className="w-10 h-10  border-spacing-1 border-2 border-slate-400 text-center leading-9 font-bold">
                    XL
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <h5>Available Offers</h5>
              <ul className="ps-0">
                <li>
                  <FaTag className="text-md cursor-pointer text-green-700 hover:text-gray-200 inline-block" />
                  <span className="ps-2">
                    <strong>Bank Offer</strong> 5% Unlimited Cashback on
                    Flipkart Axis Bank Credit Card
                    <a href="" className="no-underline ps-1">
                      <strong>T&C</strong>
                    </a>
                  </span>
                </li>
                <li>
                  <FaTag className="text-md cursor-pointer text-green-700 hover:text-gray-200 inline-block" />
                  <span className="ps-2">
                    <strong>Bank Offer</strong> 10% off up to ₹750 on HDFC Bank
                    Credit Card EMI on 3 months tenure. Min. Txn Value: ₹5000{" "}
                    <a href="" className="no-underline ps-1">
                      <strong>T&C</strong>
                    </a>
                  </span>
                </li>
                <li>
                  <FaTag className="text-md cursor-pointer text-green-700 hover:text-gray-200 inline-block" />
                  <span className="ps-2">
                    <strong>Bank Offer</strong> 10% off up to ₹1,200 on HDFC
                    Bank Credit Card EMI on 6 and 9 months tenure. Min Txn
                    Value: ₹5000{" "}
                    <a href="" className="no-underline ps-1">
                      <strong>T&C</strong>
                    </a>
                  </span>
                </li>
                <li>
                  <FaTag className="text-md cursor-pointer text-green-700  hover:text-gray-200 inline-block" />
                  <span className="ps-2">
                    <strong>Combo Offer</strong> Buy 2 or more items save ₹30
                    <a href="/" className="no-underline ps-1">
                      <strong>See all products T&C</strong>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Productdetail;
