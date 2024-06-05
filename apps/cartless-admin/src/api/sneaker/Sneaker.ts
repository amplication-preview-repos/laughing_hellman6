import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type Sneaker = {
  color: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
