import * as React from "react";
import { List, Datagrid, TextField , DateField, EmailField, NumberField, EditButton, ReferenceField} from 'react-admin';
import { Create, SimpleForm, TextInput , DateInput, NumberInput, SelectInput, ReferenceInput, PasswordInput} from 'react-admin';
import { Edit, Filter} from 'react-admin';


const GenderField = ({ record = {} }) => <span>{record.gender ? "男性" : (record.gender == false ? "女性" : "なし")}</span>;
GenderField.defaultProps = { label: '性別' };

const genderChoice = [
	{id: 0, text:'男性'},
	{id: 1, text:'女性'}
]

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="firstName" alwaysOn />
        <TextInput source="email"label='メール' defaultValue=''/>
        <DateInput label="生年月日" source="dateOfBirth" defaultValue={new Date()} />
        <NumberInput source="phoneNumber"label='電話番号' defaultValue=''/>
        <TextInput source="address" label='アドレス' defaultValue=''/>
        <SelectInput source="gender" choices={genderChoice} optionText="text" optionValue="id" />
    </Filter>
);

export const ClassesList = (props) => {

    return(
    <List {...props} title="Users List" >
        <Datagrid>
            <TextField source="name" label="お名前"/>
            <TextField source="description" label="解説"/>
            <ReferenceField label="Teachers" source="teacherId" reference="users">
                <TextField source="firstName" />
            </ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
	)}
;

export const ClassesEdit= (props) =>{
	return (
	<Edit {...props}>
        <SimpleForm>
	        <TextInput disabled source="id" />
            <TextInput source="name" label="お名前"/>
            <TextInput source="description" label="解説"/>
            <ReferenceField label="Teachers" source="teacherId" reference="users">
                <SelectInput  />
            </ReferenceField>
        </SimpleForm>
    </Edit>
		)
}

export const ClassesCreate= (props) =>{
	return (
	<Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="お名前"/>
            <TextInput source="description" label="解説"/>
            <ReferenceInput label="Teachers" source="teacherId" reference="users">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
		)
}