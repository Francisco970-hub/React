import { Edit, Create, Datagrid, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";
import { Filter, SearchInput } from "react-admin";
export const TasksList = props => (
    <List {...props}filters={<SearchBar/>}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="task" />
            <TextField source="user" />
        </Datagrid>
    </List>
);

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Nome' source='nome' resetable alwaysOn />
    </Filter>
);


export const TasksCreate = props => (
    <Create title='Criar uma task' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='task' />
            <TextInput source='user' />
        </SimpleForm>
    </Create>
);

export const TasksEdit = props => (
    <Edit title='Editar uma task' {...props}>
        <SimpleForm>
            <TextInput source='task' />
            <TextInput source='user' />
        </SimpleForm>
    </Edit>
);