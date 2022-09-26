import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Chart(props) {
    return (
        <div>
            <Sparklines height={100} with={150} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    );
}
