import { JsonValue } from "type-fest";

export type Recipe = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  cuisine: string | null;
  calories: number | null;
  complexity?: "Option1" | null;
  videoUrl: JsonValue;
  preparationTime: number | null;
  photoUrl: JsonValue;
  instructions: JsonValue;
};
