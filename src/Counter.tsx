import React from 'react';
import { atom, useAtom } from 'jotai';

/* istanbul ignore next */
export const countAtom = atom(0);

export function Counter() {
    const [count, setCount] = useAtom(countAtom);

    return (
        <h1>
            <p>{count}</p>
            <button onClick={() => setCount(c => c + 1)}>one up</button>
        </h1>
    );
}
