import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Result = () => {
    const { resource, id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${resource}/${id}/`)
            .then((response) => {
            setData(response.data);
            setError(null);
        })
        .catch((err) => {
            setError("Estos no son los droides que está buscando");
            setData(null);
        });
    }, [resource, id]);

    return (
    <div>
        {error ? (
        <div>
            <p>{error}</p>
            <img src="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/obi-wan-kenobi.jpg" alt="Obi-Wan Kenobi" />
        </div>
    ) : (
        data && (
            <div>
            <h1>{data.name || data.title}</h1>
            {resource === "people" && (
            <div>
                <p>Height: {data.height}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Birth Year: {data.birth_year}</p>
                <p>Homeworld: {data.homeworld}</p>
            </div>
            )}
            {resource === "planets" && (
            <div>
                <p>Climate: {data.climate}</p>
                <p>Population: {data.population}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Diameter: {data.diameter}</p>
            </div>
            )}
            {resource === "films" && (
            <div>
                <p>Director: {data.director}</p>
                <p>Producer: {data.producer}</p>
                <p>Release Date: {data.release_date}</p>
                <p>Episode ID: {data.episode_id}</p>
            </div>
            )}
            {/* Agregar más casos según el recurso */}
        </div>
        )
    )}
    </div>
);
};

export default Result;
