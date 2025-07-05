"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg mb-2">Your order has been placed successfully.</p>
      {orderId && (
        <p className="text-sm text-gray-600 mb-6">Order ID: <span className="font-mono">{orderId}</span></p>
      )}
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-black text-white rounded hover:opacity-90 transition"
      >
        Back to Shop
      </Link>
    </div>
  );
}
