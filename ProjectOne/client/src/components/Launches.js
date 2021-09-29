import React, { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const LAUNCHES_QUERY = gql`
  {
    query
    LaunchesQuery {
      launches {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
      </div>
    );
  }
}

export default Launches;
