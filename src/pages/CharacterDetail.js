import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "../graphql/Queries";
import { Card } from "react-bootstrap";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id: id },
  });

  console.log(`character`, character);
  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
  }, [data]);
  if (error) return <p>Error :(</p>;

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="text-center mt-5">
          <h3> Character Details</h3>
        </div>
        {loading && (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {character && (
          <Card>
            <div className="m-4">
              <Card.Img
                style={{ height: "10rem", width: "10rem" }}
                variant="top"
                src={character.image}
              />
            </div>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <hr />
              <Card.Text>
                <strong> Status: </strong>
                {character.status}
              </Card.Text>
              <Card.Text>
                <strong>Species:</strong> {character.species}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {character.gender}
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> {character.location.name}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <h4>Filmography</h4>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Serial</th>
                      <th scope="col">Release Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {character.episode.map((ep, no) => (
                      <tr key={no}>
                        <th scope="row">{no + 1}</th>
                        <td>{ep.name}</td>
                        <td>{ep.episode}</td>
                        <td>{ep.air_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Footer>
          </Card>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
