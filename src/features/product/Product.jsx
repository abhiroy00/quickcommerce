import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 row">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="no-underline col-md-3 d-flex align-items-stretch mb-4"
            >
              <div
                className="group relative "
                style={{
                  border: "1px solid #ddd",
                  padding: "10px 10px 0px 10px",
                }}
              >
                <img
                  alt={product.imageAlt}
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 lg:w-80"
                />
                <div className="mt-4 align-items-center " align="center">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <h5 className=" text-gray-900">$ {product.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
