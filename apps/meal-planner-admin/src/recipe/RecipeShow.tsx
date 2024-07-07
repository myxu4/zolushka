import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="cuisine" source="cuisine" />
        <TextField label="calories" source="calories" />
        <TextField label="complexity" source="complexity" />
        <TextField label="videoUrl" source="videoUrl" />
        <TextField label="preparationTime" source="preparationTime" />
        <TextField label="photoUrl" source="photoUrl" />
        <TextField label="instructions" source="instructions" />
      </SimpleShowLayout>
    </Show>
  );
};
