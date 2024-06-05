import { Sneaker as TSneaker } from "../api/sneaker/Sneaker";

export const SNEAKER_TITLE_FIELD = "name";

export const SneakerTitle = (record: TSneaker): string => {
  return record.name?.toString() || String(record.id);
};
