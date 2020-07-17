import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApolloClientForProvider } from "../../apollo";
import { Heatmap } from "../Heatmap/Heatmap";
import { AddPage } from "../AddPage/AddPage";

export const App = () => {
  const [client, isLoading] = useApolloClientForProvider();

  if (isLoading || !client) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={ document.querySelector('base')?.href }>
        <React.Fragment>
          <Route exact path="/">
            <Heatmap />
          </Route>
          <Route path="/add">
            <AddPage />
          </Route>
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  );
};
