import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@material-ui/core";
import { useEffect } from "react";

function App() {
  const getAllPolls = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    return fetch("http://localhost:8080/api/polls?page=0&size=30", {
      headers,
      url: "http://localhost:8080/api/polls?page=0&size=30",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getAllPolls();
  }, []);
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Container className="container" maxWidth="md">
        <h1>Polling system</h1>
      </Container>
    </div>
  );
}

export default App;
