// Import necessary dependencies
import axios from "axios"; // HTTP client for making API requests
import "./App.css"; // Import CSS styles for the component
import { useEffect, useState } from "react"; // React hooks for state management and side effects

// Main App component that displays user data from an API
function App() {
  // State to store the list of users fetched from the API
  const [users, setUsers] = useState([]);
  
  // useEffect hook to fetch user data when component mounts
  useEffect(() => {
    // Make API request to fetch users from JSONPlaceholder API
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // Update the users state with the fetched data
      setUsers(res.data);
    });
    console.log(users);
  }, []);

  // Render the component JSX
  return (
    <>
      {/* Map through users array and render each user's information */}
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
