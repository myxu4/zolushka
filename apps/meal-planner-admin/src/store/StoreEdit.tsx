import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="website" source="website" />
        <TextInput label="inventory" source="inventory" />
      </SimpleForm>
    </Edit>
  );
};
