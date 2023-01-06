import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
