import { InputJsonValue } from "../../types";

export type RecipeCreateInput = {
  name?: string | null;
  description?: string | null;
  cuisine?: string | null;
  calories?: number | null;
  complexity?: "Option1" | null;
  videoUrl?: InputJsonValue;
  preparationTime?: number | null;
  photoUrl?: InputJsonValue;
  instructions?: InputJsonValue;
};
