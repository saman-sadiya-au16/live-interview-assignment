import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Movie from '../components/Movie';
import axios from 'axios';

const MovieScreen = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('http://localhost:3333/');
            console.log(data);
            setMovies(data)
        }
        fetchMovies()
    }, [])

    return (
        <>
        <h1>Movies list</h1>
        <Row>
            {movies.map((movie) => (
                <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                    <Movie movie={movie}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default MovieScreen;