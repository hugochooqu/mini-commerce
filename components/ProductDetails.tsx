"use client";

import { ProductProps } from "@/constants";
import { fetchProducts } from "@/lib/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductProps[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (isError || !products)
    return <p className="p-4 text-red-500">Failed to load product.</p>;

  const product = products.find((p) => p.slug === slug);
  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 4);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product Not Found</h2>
        <Link href="/" className="text-indigo-600 underline mt-4 inline-block">
          Go back to catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={550}
          height={600}
          className=" h-[65vh] object-cover shadow-lg border border-black bg-lime-50"
          priority
        />
        <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl lg:text-[60px] font-normal italic">{product.name}</h1>
          <p className="text-gray-600 mt-6">{product.description}</p>
          <p className="text-2xl font-semibold mt-12">₦{product.price.toLocaleString()}</p>

        </div>

        <div className="mt-6 flex flex-row gap-2">
          <button
            className="mt-4 px-6 py-2 bg-black lg:w-[390px] text-white  transition"
            onClick={() => alert('Add to Cart coming soon!')}
          >
            Add to Cart
          </button>
          <p className="flex flex-row border border-gray-500 px-6 py-2 mt-4 items-center justify-center">
              <span className="border-r-1 py-[6px] px-[12px]" >
                <AiOutlineMinus />
              </span>
              <span className=" py-[6px] px-[22px]">
                0
              </span>
              <span className="border-l-1 py-[6px] px-[12px] " >
                <AiOutlinePlus />
              </span>
            </p>
        </div>
      </div>
      </div>
      
      <div className="mt-20 p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {otherProducts.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.slug}`}
              className="block border  p-4 shadow-sm bg-white hover:shadow-md transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              
              <p className="text-lg font-normal tracking-wider mt-2">₦{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
