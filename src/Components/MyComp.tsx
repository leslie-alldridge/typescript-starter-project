import * as React from 'react';

export interface IMyCompProps {
    name: 'leslie' | 'leslietest',
    isMale: boolean,
    kids: 2 | 4,
    livedIn?: ['nz', 'jpn']
}

const MyComp = (props:IMyCompProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.isMale ? 'yes' : 'no'} {props.kids}</p>
        </div>
    )
}

export default MyComp