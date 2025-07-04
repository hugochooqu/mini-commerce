'use client';

import { useCartStore } from '@/stores/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const subtotal = useCartStore((state) => state.totalPrice)();
  const totalQuantity = useCartStore((state) => state.totalQuantity)();
  const totalPrice = useCartStore((state) => state.totalPrice)();

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/" className="text-indigo-600 underline">Back to catalogue</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₦{item.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              {/* Quantity Input */}
              <div className="flex items-center border rounded px-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-2 py-1"
                >
                  −
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-2 py-1"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 border-t pt-6 text-right space-y-2">
        <p className="text-gray-700">Items: {totalQuantity}</p>
        <p className="text-gray-700">Subtotal: ₦{subtotal.toLocaleString()}</p>
        <h2 className="text-xl font-bold">Total: ₦{totalPrice.toLocaleString()}</h2>

        <Link
          href="/checkout"
          className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
