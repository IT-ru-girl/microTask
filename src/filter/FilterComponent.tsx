import React from 'react';
import button from '../button/Button';
import {FilterType} from './AppFilter';

type FilterPropsType={
    filterRubles: Array<MoneyType>
    onClickHandler: (name:FilterType)=> void
}
 type MoneyType ={
    banknots: string
     value: number
     number: string
 }
const FilterComponent = (props: FilterPropsType) => {
    return (
        <div>
            <div>
                <button onClick={() => {props.onClickHandler('All')}}>All
                </button>
                <button onClick={() => {props.onClickHandler('RUBLS')}}>Rubls
                </button>
                <button onClick={() => {props.onClickHandler('Dollars')}}>Dollars
                </button>
            </div>
            <ul>
                {props.filterRubles.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots} </span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
};

export default FilterComponent;