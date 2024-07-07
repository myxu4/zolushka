import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IngredientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="unit" source="unit" />
        <TextInput label="name" source="name" />
        <NumberInput label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
