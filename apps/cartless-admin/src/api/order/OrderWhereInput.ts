import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SneakerWhereUniqueInput } from "../sneaker/SneakerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  sneaker?: SneakerWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
