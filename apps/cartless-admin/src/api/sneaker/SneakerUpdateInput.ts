import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutSneakersInput } from "./OrderUpdateManyWithoutSneakersInput";

export type SneakerUpdateInput = {
  color?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  orders?: OrderUpdateManyWithoutSneakersInput;
  price?: number | null;
  size?: number | null;
};
