import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutSneakersInput } from "./OrderCreateNestedManyWithoutSneakersInput";

export type SneakerCreateInput = {
  color?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutSneakersInput;
  price?: number | null;
  size?: number | null;
};
