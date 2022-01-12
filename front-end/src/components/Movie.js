import React from 'react'
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Movie = ({ movie }) => {
    return (
        <Card className=''>
            <Card.Body>
                <Card.Title>
                    <strong>{movie?.name ?? ''}</strong>
                </Card.Title>


            <Card.Text>
                <p>{movie.rating ?? ''}</p>
            </Card.Text>

            <Card.Text>
                <p>{movie.relisedDate ?? ''}</p>
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Movie

