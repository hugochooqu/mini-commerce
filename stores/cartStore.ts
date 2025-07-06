import { CartState } from '@/constants';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: item => {
        const existing = get().items.find(i => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
        toast.success(`${item.quantity} ${item.name} added to cart`)
      },
      
      removeFromCart: id => set({ items: get().items.filter(i => i.id !== id) }),

      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map(i => (i.id === id ? { ...i, quantity } : i)),
        }),
      clearCart: () => set({ items: [] }),

      subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      totalQuantity: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'cart-store' },
  ),
);
