import React, { useState, useCallback, useRef, Fragment } from 'react';
import Counter from '../../components/Counter/Counter';


function CounterPage() {
    const [count, setCount] = useState(0);

    // Memorizza le funzioni `increment` e `reset`
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);


    const reset = useCallback(() => {
        setCount(0);
    }, []);

    const changeCharacter = useRef<HTMLDivElement | null>(null);
    const focusChanger = useRef<HTMLInputElement | null>(null);


    const changeStyle = () => {
        if (changeCharacter.current) {
            changeCharacter.current.style.backgroundColor = 'lightblue';
            changeCharacter.current.style.padding = '10px';
            changeCharacter.current.style.border = '0.5px solid grey';
            changeCharacter.current.style.width = '600px';
        }
    }

    const changeFocus = () => {   
            focusChanger.current?.focus();
    }

    return (
        <Fragment>
            <div ref={changeCharacter} className='d-flex justify-content-center mt-5'>
                <Counter count={count} increment={increment} reset={reset} />
                <input ref={focusChanger} type="text" />
            </div>
            <div className='d-flex m-5'>
                <button className='btn btn-primary p-2' style={{ marginTop: "50rem" }} onClick={changeStyle}>Change</button>
                <button className='btn btn-primary p-2' style={{ marginTop: "50rem" }} onClick={changeFocus}>Change Focus</button>
            </div>
        </Fragment>
    );
}

export default CounterPage