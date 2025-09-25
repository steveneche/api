import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
    console.log(users);
  }, []);

  return (
    <>
      {users.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.website}</p>
          <p>{item.company.name}</p>
          <p>{item.company.catchPhrase}</p>
          <p>{item.company.bs}</p>
        </div>
      ))}{" "}
    </>
  );
}

export default App;
