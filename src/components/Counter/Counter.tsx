import React, { FC } from 'react'

interface CounterProps {
    count: number
    increment: () => void
    reset: () => void
}

const Counter: FC<CounterProps> = ({count, increment, reset}) => {
    return (
        <div>
            <div className='bg-light p-5 shadow-lg rounded'>
                <h1>Conteggio: {count}</h1>
                <button className='btn btn-primary' onClick={increment}>Incrementa</button>
                <button className='btn btn-danger' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
