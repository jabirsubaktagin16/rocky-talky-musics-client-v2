import { ProductProps } from "./product";

export interface HomePageProductSection {
  title: string;
  paragraph: string;
  arrayList?: ProductProps[];
  productsToBeDisplayed?: number;
}
