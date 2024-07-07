import { InputJsonValue } from "../../types";
import { MenuCreateNestedManyWithoutUsersInput } from "./MenuCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  familySize?: number | null;
  caloriesPerDay?: number | null;
  preferredCuisine?: string | null;
  shoppingCart?: InputJsonValue;
  menus?: MenuCreateNestedManyWithoutUsersInput;
};
