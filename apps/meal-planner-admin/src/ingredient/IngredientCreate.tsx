import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IngredientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="unit" source="unit" />
        <TextInput label="name" source="name" />
        <NumberInput label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
