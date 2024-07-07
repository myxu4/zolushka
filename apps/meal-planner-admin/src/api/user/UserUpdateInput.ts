import { InputJsonValue } from "../../types";
import { MenuUpdateManyWithoutUsersInput } from "./MenuUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  familySize?: number | null;
  caloriesPerDay?: number | null;
  preferredCuisine?: string | null;
  shoppingCart?: InputJsonValue;
  menus?: MenuUpdateManyWithoutUsersInput;
};
