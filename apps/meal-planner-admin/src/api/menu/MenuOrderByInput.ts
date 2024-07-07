import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  userId?: SortOrder;
};
