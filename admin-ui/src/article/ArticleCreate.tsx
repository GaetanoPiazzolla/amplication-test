import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" source="text" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
