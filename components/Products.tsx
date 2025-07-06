'use client';

import { ProductProps } from '@/constants';
import { fetchProducts } from '@/lib/fetchProducts';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import SkeletonCard from './SkeletonCard';

const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductProps[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  if (isError) return <p className="p-4 text-red-500">Failed to load products.</p>;

  console.log(products);

  return (
    <div
      id="product"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-5 p-4 lg:px-12 mx-auto cursor-pointer"
    >
      {products?.map(product => (
        <div
          key={product.id}
          className=" p-4 shadow-lg  bg-lime-50 transform transition-transform duration-500 ease-in-out hover:scale-105"
        >
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={270}
              className="w-full h-68 object-cover mt-12"
              unoptimized
            />
            <p className="text-lg font-normal tracking-wider mt-12">#{product.price.toFixed(2)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
