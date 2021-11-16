//import Axios from "axios";
import {
  Edit,
  Create,
  Datagrid,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "ra-ui-materialui";
import { Filter, SearchInput,DateTimeInput ,ReferenceInput ,SelectInput} from "react-admin";
//import {UsersListEmail} from "../new comps/users.js";
export const TasksList = (props) => (
  <List {...props} filters={<SearchBar />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="task" />
      <TextField source="user" />
      <TextField source="inicio" />
      <TextField source="fim" />
    </Datagrid>
  </List>
);

const SearchBar = (props) => (
  <Filter {...props}>
    <SearchInput placeholder="Nome" source="nome" resetable alwaysOn />
  </Filter>
);

export const TasksCreate = (props) => (
  <Create title="Criar uma task" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="task" /> 
      <ReferenceInput source="user" label="User" reference="users" >
        <SelectInput source="user" optionValue="id" optionText="email"/>
      </ReferenceInput>   
        <DateTimeInput source="inicio"/> 
      <DateTimeInput source="fim" /> 
    </SimpleForm>
  </Create>
);

export const TasksEdit = (props) => (
  <Edit title="Editar uma task" {...props}>
    <SimpleForm>
      <TextInput source="task" />
      <TextInput source="user" />
    </SimpleForm>
  </Edit>
);
