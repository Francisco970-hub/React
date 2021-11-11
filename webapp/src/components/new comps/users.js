import { PasswordInput ,Edit, Create, Datagrid, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";
import { Filter, SearchInput } from "react-admin";
export const UsersList = props => (
    <List {...props}filters={<SearchBar/>}>
         <Datagrid>
            <TextField source="email" />
        </Datagrid>
    </List>
);

export const UsersListEmail = props => (
    <List>
            <TextField source="email" />
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
            <PasswordInput  source='password' />
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