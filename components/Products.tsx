"use client";

import { ProductProps } from "@/constants";
import { fetchProducts } from "@/lib/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const Products = () => {
  const {
    data: products, isLoading, isError} = useQuery<ProductProps[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (isError) return <p className="p-4 text-red-500">Failed to load products.</p>;

  console.log(products);

  return (
    <div id="product" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 gap-y-5 p-4 lg:px-12 mx-auto cursor-pointer">
      {products?.map((product) => (
        <div key={product.id} className="border p-4 shadow-md bg-lime-50 transform transition-transform duration-500 ease-in-out hover:scale-105">
            <Link href={`/product/${product.slug}`}>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mt-12" />
                <p className="text-lg font-normal tracking-wider mt-12">#{product.price.toFixed(2)}</p>
            </Link>
        </div>
      ))}
    </div>
  )
};

export default Products;
