import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenuUpdateInput = {
  name?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
