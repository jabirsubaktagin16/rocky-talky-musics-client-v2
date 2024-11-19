export interface CartItemProps {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartProps {
  items: CartItem[];
  totalAmount: number;
}
