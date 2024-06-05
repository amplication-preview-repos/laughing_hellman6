import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SNEAKER_TITLE_FIELD } from "./SneakerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SneakerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="sneakerId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Order Date" source="orderDate" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Sneaker"
              source="sneaker.id"
              reference="Sneaker"
            >
              <TextField source={SNEAKER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Price" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
