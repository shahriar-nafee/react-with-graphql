import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_EPISODES } from "../graphql/Queries";

function Episodes() {
  const { loading, error, data } = useQuery(GET_ALL_EPISODES);
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    if (data) {
      setEpisodes(data.episodes.results);
    }
  }, [data]);

  if (error) return <p>Error :(</p>;

  return (
    <div className="jumbotron">
      <div className="container container-fluid">
        <div className="text-center mt-5">
          <h4>All Episodes</h4>
        </div>
        {loading && (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {episodes && (
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
                {episodes.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.episode}</td>
                    <td>{item.air_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Episodes;
