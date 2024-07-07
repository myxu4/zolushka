import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type IngredientWhereInput = {
  id?: StringFilter;
  unit?: StringNullableFilter;
  name?: StringNullableFilter;
  quantity?: FloatNullableFilter;
};
