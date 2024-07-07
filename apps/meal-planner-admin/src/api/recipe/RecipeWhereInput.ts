import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  cuisine?: StringNullableFilter;
  calories?: IntNullableFilter;
  complexity?: "Option1";
  videoUrl?: JsonFilter;
  preparationTime?: IntNullableFilter;
  photoUrl?: JsonFilter;
  instructions?: JsonFilter;
};
