import { Edit, Create, Datagrid, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";
import { Filter, SearchInput } from "react-admin";
export const UsersList = props => (
    <List {...props}filters={<SearchBar/>}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
        </Datagrid>
    </List>
);

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Nome' source='nome' resetable alwaysOn />
    </Filter>
);

export const UsersCreate = props => (
    <Create title='Criar um cliente' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='email' />
            <TextInput source='password' />
        </SimpleForm>
    </Create>
);

export const UsersEdit = props => (
    <Edit title='Editar um cliente' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='email' />
            <TextInput source='password' />
        </SimpleForm>
    </Edit>
);