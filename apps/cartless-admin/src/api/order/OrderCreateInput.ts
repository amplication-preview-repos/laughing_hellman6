import { SneakerWhereUniqueInput } from "../sneaker/SneakerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  quantity?: number | null;
  sneaker?: SneakerWhereUniqueInput | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
