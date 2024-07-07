import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const RecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="cuisine" source="cuisine" />
        <NumberInput step={1} label="calories" source="calories" />
        <SelectInput
          source="complexity"
          label="complexity"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <NumberInput
          step={1}
          label="preparationTime"
          source="preparationTime"
        />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
