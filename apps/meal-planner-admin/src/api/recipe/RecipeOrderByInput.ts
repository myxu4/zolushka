import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  cuisine?: SortOrder;
  calories?: SortOrder;
  complexity?: SortOrder;
  videoUrl?: SortOrder;
  preparationTime?: SortOrder;
  photoUrl?: SortOrder;
  instructions?: SortOrder;
};
