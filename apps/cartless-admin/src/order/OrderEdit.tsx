import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SneakerTitle } from "../sneaker/SneakerTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
