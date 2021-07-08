import React, { useState } from "react";
import Actions from "./Actions";
export default function ProprtiesList() {
  // eslint-disable-next-line no-unused-vars
  const [properties, setProperties] = useState([
    { id: 1, name: "aaa", location: "giza", price: "999999$", status: "sold" , date: (new Date("2015-03-25")).toISOString().slice(0,10) },
    { id: 2, name: "aba", location: "cairo", price: "99999$", status: "sold" ,  date: (new Date("2020-10-01")).toISOString().slice(0,10)},
    { id: 3, name: "aac", location: "alex", price: "899999$", status: "sold" , date: (new Date("2017-05-05")).toISOString().slice(0,10)},
  ]);
  function handleDelete(id) {
    console.log(id)
    let ps = properties.filter(p=>p.id!==id);
    setProperties(ps);
  }
  return (
    <div className="container">
      <table className="table  mx-auto">
        <thead>
          <tr>
            <th scope="col" className="text-left">
              ID
            </th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <th>{property.id}</th>
              <th>{property.name}</th>
              <td>{property.location}</td>
              <td>{property.price}</td>
              <td>{property.status}</td>
              <td>{property.date}</td>
              <td>
                <Actions id={property.id} handleDelete={handleDelete}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
