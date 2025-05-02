export interface CartProps {
  cart: {
    [id: number]: {
      name: string;
      count: number;
      price: number;
    };
  };
  onDecrement: (id: number) => void;
  total: number;
  onPurchase: () => void;
}
