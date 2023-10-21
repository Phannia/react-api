import React from 'react'
import {Button} from 'react-bootstrap'

const Pagination = ({prev, next, onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    prev ? 
                
                <li className='page-item '>
                    <Button className='mx-3 page-link' onClick={handlePrevious}>Previous</Button>
                </li>
                : null
                }
                {
                    next ?
                
                <li className='page-item '>
                    <Button className='mx-3 page-link' onClick={handleNext}>Next</Button>
                </li>
                : null
                }
            </ul>
        </nav>
    ) 
}

export default Pagination