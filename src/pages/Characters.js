import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS_NAME } from "../graphql/Queries";
import { Link } from "react-router-dom";

function Characters() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS_NAME);
  const [users, setUsers] = useState();

  useEffect(() => {
    if (data) {
      setUsers(data.characters.results);
    }
  }, [data]);

  if (error) return <p>Error :(</p>;

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="text-center mt-5">
          <h4>All Characters</h4>
        </div>
        {loading && (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {users && (
          <>
            <i>Click on character's name to see character details</i>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Link to={`/character/${item.id}`}>{item.name}</Link>
                      </td>
                      <td>{item.gender}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Characters;
