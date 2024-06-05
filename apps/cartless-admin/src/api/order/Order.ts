import { Sneaker } from "../sneaker/Sneaker";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  quantity: number | null;
  sneaker?: Sneaker | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
