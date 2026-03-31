"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, p) => sum + p.price * p.qty,
    0
  );

  return (

    <div className="container py-5" style={{marginTop: "100px"}}>

      <h2 className="mb-4">Shopping Cart</h2>

      <table className="table">

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th width="150">Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {cart.map(p => (

            <tr key={p.id}>

              <td className="d-flex align-items-center gap-3">

                <img
                  src={p.thumbnail}
                  width="60"
                />

                {p.title}

              </td>

              <td>${p.price}</td>

              <td>

                <input
                  type="number"
                  value={p.qty}
                  min="1"
                  className="form-control"
                  onChange={(e) =>
                    updateQty(p.id, Number(e.target.value))
                  }
                />

              </td>

              <td>${(p.price * p.qty).toFixed(2)}</td>

              <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(p.id)}
                >
                  Remove
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <h4 className="text-end">
        Total: ${total.toFixed(2)}
      </h4>

    </div>

  );
}