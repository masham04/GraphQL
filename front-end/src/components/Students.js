import React from 'react'
import { useQuery, gql } from '@apollo/client';

const Get_Bachy = gql`
  query GetAllStu {
    students {
      name,
      email
    }
  }
`;
export const Students = () => {
    const {loading,error,data} = useQuery(Get_Bachy);
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>ERROR 404 Found</h1>
    const {students} = data;
    console.log(data);

    return (
        <div>
            <h1>Students in class</h1>
            <table border='2' width='500'>
            {students.map(el => {return(
                     <tr><td>{el.name}</td>
                     <td>{el.email}</td>
                     </tr>
                 )})}
            </table>
        </div>
    )
}

