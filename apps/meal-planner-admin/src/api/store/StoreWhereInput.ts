import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
  inventory?: StringNullableFilter;
};
