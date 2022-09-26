import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default function Chart(props) {
    return (
        <div>
            <Sparklines height={100} with={150} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div className="number-info">{average(props.data)} {props.units}</div>
        </div>
    );
}
