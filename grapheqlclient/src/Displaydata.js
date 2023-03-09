import React from 'react';
import {useQuery,gql} from '@apollo/client'

const QUERYAU = gql `
  query userr{
  users {
    name
    username
    age
  }
}
` 
const MOVAFF = gql`
query movaff{
  movies {
    name
    yearOfPublication
  }
}

`
function DisplayData() {
    const {data:userd} = useQuery(QUERYAU);
    const {data:filmd} = useQuery(MOVAFF);
    
   
    if(userd){
        console.log(userd);
    }
    if(filmd){
        console.log(filmd);
    }
    return <div>{userd && userd.users.map((ele)=>{
        return (<div>
        <h1>Name : {ele.name}</h1>
        <h1>Username : {ele.username}</h1>
        <h1>age : {ele.age}</h1>
        </div>);


    })}
    
    {filmd && filmd.movies.map((ele)=>{
  
        return (<div>
        <h1>Name : {ele.name}</h1>
        <h1>Year Of Publication : {ele.yearOfPublication}</h1>
        
        </div>)


    })}
    
    
    </div>
}

export default DisplayData;