'use client';

import { useCartStore } from '@/stores/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';

export default function Cart() {
  const items = useCartStore(state => state.items);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const subtotal = useCartStore(state => state.totalPrice)();
  const totalQuantity = useCartStore(state => state.totalQuantity)();
  const totalPrice = useCartStore(state => state.totalPrice)();

  if (items.length === 0) {
    return (
      <div className="p-6 w-full text-center h-[70vh] flex flex-col items-center justify-center">
        <AiOutlineShopping size={100} className='text-center my-6' />
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/" className="text-indigo-600 underline">
          Back to catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1450px] mx-auto p-6 ">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="text-gray-700 text-xl">Items: {totalQuantity}</p>
      </div>

      <div className="space-y-6">
        {items.map(item => (
          <div
            key={item.id}
            className="flex flex-col xl:grid xl:grid-cols-12 items-start xl:items-center justify-between border-b border-t border-t-gray-200 gap-4"
          >
            <div className="flex xl:block w-full xl:col-span-2 lg:ml-8">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-1/3 lg:h-[250px] xl:w-full object-cover border-l border-r bg-lime-50 border-black"
              />

              {/* Details container on mobile/tablet */}
              <div className="w-2/3 flex flex-col justify-between py-4 px-4 xl:hidden">
                <div className="flex justify-between text-sm text-gray-500 capitalize">
                  {item.type}
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>

                <h3 className="text-base font-semibold mt-2">{item.name}</h3>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center border border-gray-500 px-3 py-1">
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <p className="text-gray-800 font-medium text-base">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden xl:grid h-full xl:col-span-10 xl:grid-cols-10 items-center gap-4 lg:mx-8">
              <div className="col-span-5 border-r h-full flex flex-col justify-between py-3">
                <div className="flex flex-row justify-between pr-6">
                  <p className="capitalize">{item.type}</p>
                  <button
                    className="font-bold rounded-full cursor-pointer text-red-500 px-2 py-0.5 transition transform ease-in-out duration-75 hover:scale-105 "
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
              <div className="col-span-3 border-r h-full flex flex-col justify-between items-center py-3">
                <p>Quantity</p>
                <p className="flex flex-row border border-gray-500 px-6 py-2 mt-4 items-center justify-center">
                  <span
                    className="border-r-1 py-[6px] px-[12px] cursor-pointer"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <AiOutlineMinus />
                  </span>
                  <span className=" py-[6px] px-[22px]">{item.quantity}</span>

                  <span
                    className="border-l-1 py-[6px] px-[12px] cursor-pointer"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className="col-span-2 border-r h-full flex flex-col justify-between items-center py-3">
                <p className="text-base tracking-wide">Price</p>
                <p className="text-gray-600 text-xl">₦{item.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 text-left space-y-2 mb-10">
        <p className="text-gray-700">Subtotal: ₦{subtotal.toLocaleString()}</p>
        <h2 className="text-xl font-bold">Total: ₦{totalPrice.toLocaleString()}</h2>
        <Link
          href="/checkout"
          className="mt-4 inline-block px-16 py-4 bg-black text-white transition duration-300 ease-in-out hover:scale-102 cursor-pointer"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
