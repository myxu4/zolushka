import { User } from "../user/User";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  startDate: Date | null;
  endDate: Date | null;
  user?: User | null;
};
