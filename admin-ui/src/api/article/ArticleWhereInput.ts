import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ArticleWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  title?: StringNullableFilter;
};
