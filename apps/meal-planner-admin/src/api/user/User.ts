import { JsonValue } from "type-fest";
import { Menu } from "../menu/Menu";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  familySize: number | null;
  caloriesPerDay: number | null;
  preferredCuisine: string | null;
  shoppingCart: JsonValue;
  menus?: Array<Menu>;
};
