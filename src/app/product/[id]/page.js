"use client";

import axios from "axios";
import { useEffect, useState, use } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ params }) {
  const [qty, setQty] = useState(1);
  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);
  const { addToCart } = useCart();

  const { id } = use(params); // sửa ở đây

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-6">
          <img src={product.thumbnail} className="img-fluid" />
        </div>

        <div className="col-lg-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-primary">${product.price}</h3>
          <p>{product.description}</p>

          <div className="input-group quantity mb-5" style={{ width: "100px" }}>
            <div className="input-group-btn">
              <button
                className="btn btn-sm btn-minus rounded-circle bg-light border"
                onClick={decrease}
              >
                <i className="fa fa-minus"></i>
              </button>
            </div>

            <input
              type="text"
              className="form-control form-control-sm text-center border-0"
              value={qty}
              readOnly
            />

            <div className="input-group-btn">
              <button
                className="btn btn-sm btn-plus rounded-circle bg-light border"
                onClick={increase}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>

          <button
            className="btn border border-secondary rounded-pill px-4 py-2 text-primary"
            onClick={() => {
              addToCart(product, qty);
              alert("Đã thêm vào giỏ hàng");
            }}
          >
            <i className="fa fa-shopping-bag me-2"></i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
