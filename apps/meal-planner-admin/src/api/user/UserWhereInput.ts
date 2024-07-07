import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  familySize?: IntNullableFilter;
  caloriesPerDay?: IntNullableFilter;
  preferredCuisine?: StringNullableFilter;
  shoppingCart?: JsonFilter;
  menus?: MenuListRelationFilter;
};
