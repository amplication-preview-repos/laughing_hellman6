import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SneakerTitle } from "../sneaker/SneakerTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Order Date" source="orderDate" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="sneaker.id" reference="Sneaker" label="Sneaker">
          <SelectInput optionText={SneakerTitle} />
        </ReferenceInput>
        <NumberInput label="Total Price" source="totalPrice" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
