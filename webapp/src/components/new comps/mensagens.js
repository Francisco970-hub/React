import { Edit, Create, Datagrid, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";
import { Filter, SearchInput } from "react-admin";
export const MensagensList = props => (
    <List {...props}filters={<SearchBar/>}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="user_name" />
            <TextField source="mensagem" />
        </Datagrid>
    </List>
);

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Nome' source='nome' resetable alwaysOn />
    </Filter>
);

export const MensagensCreate = props => (
    <Create title='Criar uma mensagem' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='user_name' />
            <TextInput source='mensagem' />
        </SimpleForm>
    </Create>
);

export const MensagensEdit = props => (
    <Edit title='Editar um mensagem' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='user_name' />
            <TextInput source='mensagem' />
        </SimpleForm>
    </Edit>
);