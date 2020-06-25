import * as React from "react";
import { List, Datagrid, TextField , DateField, EmailField, NumberField, EditButton} from 'react-admin';
import { Create, SimpleForm, TextInput , DateInput, NumberInput, SelectInput, ReferenceInput, PasswordInput} from 'react-admin';
import { Edit, Filter} from 'react-admin';


const GenderField = ({ record = {} }) => <span>{record.gender ? "男性" : (record.gender == false ? "女性" : "なし")}</span>;
GenderField.defaultProps = { label: '性別' };

const genderChoice = [
	{id: 1, text:'男性'},
	{id: 0, text:'女性'}
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

export const UsersList = (props) => {

    return(
    <List {...props} title="Users List" >
        <Datagrid>
            <TextField source="firstName" label="お名前"/>
            <TextField source="username"label='ユーザー名' />
            <EmailField source="email"label='メール' />
            <DateField source="dateOfBirth" label='生年月日'/>
            <NumberField source="phoneNumber"label='電話番号' />
            <TextField source="address" label='アドレス' />
            <GenderField source="gender" />
            <EditButton label='編集'/>
        </Datagrid>
    </List>
	)}
;

export const UsersEdit= (props) =>{
	return (
	<Edit {...props}>
        <SimpleForm>
	        <TextInput disabled source="id" />
            <TextInput source="firstName" label="お名前"/>
            <TextInput source="username"label='ユーザー名' />
            <TextInput source="email"label='メール' />
            <DateInput label="生年月日" source="dateOfBirth" defaultValue={new Date()} />
            <NumberInput source="phoneNumber"label='電話番号' />
            <TextInput source="address" label='アドレス' />
            <SelectInput source="gender" choices={genderChoice} optionText="text" optionValue="id" />
        </SimpleForm>
    </Edit>
		)
}

export const UsersCreate= (props) =>{
	return (
	<Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" label="お名前"/>
            <TextInput source="username"label='ユーザー名' />
            <PasswordInput source="password"label='パスワード' />
            <TextInput source="email"label='メール' />
            <DateInput label="生年月日" source="dateOfBirth" defaultValue={new Date()} />
            <NumberInput source="phoneNumber"label='電話番号' />
            <TextInput source="address" label='アドレス' />
            <SelectInput source="gender" choices={genderChoice} optionText="text" optionValue="id" />
        </SimpleForm>
    </Create>
		)
}