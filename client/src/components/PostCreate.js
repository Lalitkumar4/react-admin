import { Create, SimpleForm, DateInput, TextInput } from "react-admin"

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
