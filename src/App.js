import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UsersList, UsersEdit} from './Users/UserList'

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({Accept: 'application/json'});
//   }
//   // add your own headers here
//   options.headers.set('X-Total-Count', '32');
//   return fetchUtils.fetchJson(url, options);
// }

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://127.0.0.1:3000/admin/');
const App = () => {
  dataProvider.getList('users', {
      pagination: { page: 1, perPage: 5 },
      sort: { field: 'title', order: 'ASC' },
      filter: { author_id: 12 },
  })
  .then(response => console.log(response));
  return(
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UsersList} edit={UsersEdit}/>
    </Admin>
)};
export default App;
