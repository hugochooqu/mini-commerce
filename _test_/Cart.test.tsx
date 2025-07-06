import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartPage from '@/app/cart/page';
import { useCartStore } from '@/stores/cartStore';
import type { CartState } from '@/constants';

jest.mock('@/stores/cartStore', () => ({
  useCartStore: jest.fn(),
}));

describe('CartPage', () => {
  it('shows empty cart message when cart is empty', () => {
    const mockState: CartState = {
      items: [],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
      totalQuantity: () => 0,
      totalPrice: () => 0,
    };

    (useCartStore as unknown as jest.Mock).mockImplementation(
      (selector: (state: CartState) => unknown) => selector(mockState)
    );

    render(<CartPage />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
