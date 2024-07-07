import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  unit?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
};
