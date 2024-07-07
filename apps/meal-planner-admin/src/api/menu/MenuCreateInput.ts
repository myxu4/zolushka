import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenuCreateInput = {
  name?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
