import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CHARACTERS_QUERY } from "../graphql/Queries";
import { Card } from "react-bootstrap";

function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);
  const [users, setUsers] = useState();

  useEffect(() => {
    if (data) {
      setUsers(data.characters.results);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="text-center">
          <h3>Character Details</h3>
        </div>
        <div className="row mt-2">
          {users &&
            users.map((item, index) => (
              <div className="col-md-6 mt-3" key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <hr />
                    <Card.Text>
                      Location: <i>{item.location.name}</i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="table-responsive">
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Episode's Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.episode.map((ep, no) => (
                            <tr>
                              {" "}
                              <th scope="row">{no + 1}</th> <td> {ep.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
