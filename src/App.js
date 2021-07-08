import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import PropertiesList from "./components/ProprtiesList";
import NewPropertyForm from "./components/NewPropertyForm";
import Navbar from "./components/Navbar";
function App() {
  const defaultProperties = [
    {
      id: 1,
      name: "aaa",
      location: "London",
      price: "999999£",
      status: "sold",
      date: new Date("2015-03-25").toISOString().slice(0, 10),
    },
    {
      id: 2,
      name: "aba",
      location: "Everton",
      price: "99999£",
      status: "sold",
      date: new Date("2020-10-01").toISOString().slice(0, 10),
    },
    {
      id: 3,
      name: "aac",
      location: "Liverpool",
      price: "899999£",
      status: "sold",
      date: new Date("2017-05-05").toISOString().slice(0, 10),
    },
  ];
  const [properties, setProperties] = useState(defaultProperties);
  const handleDelete = (id) => {
    const pn = properties.filter((p) => p.id !== id);
    setProperties(pn);
  };
  const handleEdit = (id, p) => {
    let ind = properties.findIndex((p) => p.id === id);
    let ps = [...properties];
    console.log(id, p);
    ps[ind].name = p.name;
    ps[ind].price = p.price;
    ps[ind].location = p.location;
    ps[ind].status = p.status;
    setProperties(ps);
  };
  const handleAdd = (newProperty) => {
    console.log("add");
    let pn = properties;
    pn.push({
      ...newProperty,
      date: new Date().toISOString().slice(0, 10),
      id: Date.now() % 1000000,
    });
    setProperties(pn);
  };
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PropertiesList
            handleDelete={handleDelete}
            properties={properties}
            handleEdit={handleEdit}
          />
        </Route>
        <Route path="/add">
          <NewPropertyForm handleAdd={handleAdd} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
