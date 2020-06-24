import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://127.0.0.1:3000/');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);
export default App;
