"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
export const dynamic = "force-dynamic";

export default function Home() {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const { addToCart } = useCart();

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container py-5" style={{marginTop: "100px"}}>
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <Link href={`/product/${p.id}`}>
                  <img
                    src={p.thumbnail}
                    className="img-fluid w-100 rounded-top"
                    alt={p.title}
                  />
                </Link>
              </div>

              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                {p.category}
              </div>

              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>{p.title}</h4>

                <p>{p.description.slice(0, 80)}...</p>

                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">${p.price}</p>

                  <button
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                    onClick={()=>{
                      addToCart(p,1);
                      alert("Đã thêm vào giỏ hàng");
                    }}
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
