export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  allowedForDiscount: boolean;
  discountPercent: number;
  brand: string;
  category: string;
  stock: number;
  images: Array<string>;
}

export interface ProductCardProps {
  product: ProductProps;
}
