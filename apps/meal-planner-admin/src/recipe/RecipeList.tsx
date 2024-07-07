import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RecipeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recipes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
