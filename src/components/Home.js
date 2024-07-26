import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    navigate(`/${resource}/${id}`);
};

return (
    <div>
        <h1>Luke APIwalker</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Search for:
            <select value={resource} onChange={(e) => setResource(e.target.value)}>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
        </label>
        <label>
            Id:
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
        </label>
        <button type="submit">Search</button>
    </form>
    </div>
);
};

export default Home;
