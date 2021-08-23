import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Episodes from "./pages/Episodes";
import Topbar from "./pages/Navbar";

export default function App() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/character/:id" component={CharacterDetail} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
