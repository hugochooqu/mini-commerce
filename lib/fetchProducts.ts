import { ProductProps } from "@/constants";

export const fetchProducts = async() : Promise<ProductProps[]> => {
    const local = localStorage.getItem("products");
    if (local) {
        return JSON.parse(local);
    }

    const res = await fetch('/products.json')
    if (!res.ok) throw new Error('Failed to fetch products');

    const data = await res.json();
    localStorage.setItem("products", JSON.stringify(data));
    return data;
}
    
