'use client';

import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import toast from 'react-hot-toast';

export default function Checkout() {
  const router = useRouter();
  const items = useCartStore(state => state.items);
  const total = useCartStore(state => state.totalPrice)();
  const clearCart = useCartStore(state => state.clearCart);

  const handlePlaceOrder = () => {
    const orderId = uuidv4().slice(0, 8).toUpperCase(); 
    clearCart();
    toast.success('Redirecting...')
    router.push(`/checkout/success?orderId=${orderId}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-lg font-semibold">
              ₦{(item.price * item.quantity).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between text-xl font-bold">
        <span>Total:</span>
        <span>₦{total.toLocaleString()}</span>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="mt-8 w-full bg-black text-white py-3 rounded hover:opacity-90 transition"
      >
        Place Order
      </button>
    </div>
  );
}
