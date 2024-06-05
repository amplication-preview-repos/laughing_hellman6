import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SneakerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sneakers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
