export interface ProductProps {
     id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalQuantity: () => number;
  totalPrice: () => number;
}