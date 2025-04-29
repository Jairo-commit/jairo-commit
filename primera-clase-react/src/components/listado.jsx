import React from "react";
import { useEffect, useState } from 'react';


export default function Listado(){
    const [data, setData] = useState([]);

  useEffect(() => {

    const url = "https://jsonplaceholder.typicode.com/todos/";
    fetch(url).then((Response) => Response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));
  }, [] );

  return(
    <div id='container'>
      <h1>Data desde la API</h1>
      <ul>
        {
          data.map((item) => (
            <li key={item.id} className='box'>Titulo: {item.title}</li>
          ))
        }
      </ul>
    </div>
  );
}