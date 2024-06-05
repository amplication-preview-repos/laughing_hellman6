import { SneakerWhereInput } from "./SneakerWhereInput";
import { SneakerOrderByInput } from "./SneakerOrderByInput";

export type SneakerFindManyArgs = {
  where?: SneakerWhereInput;
  orderBy?: Array<SneakerOrderByInput>;
  skip?: number;
  take?: number;
};
