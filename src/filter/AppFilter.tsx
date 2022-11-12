import React, {useState} from 'react';
import button from '../button/Button';
import FilterComponent from './FilterComponent';


 export type FilterType = 'All' | 'RUBLS' | 'Dollars'

const AppFilter = (props: FilterType) => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const  [filter, setFilter] =useState('All')

//name=filter
    let filterRubles = money
    if (filter==='RUBLS'){
        filterRubles= money.filter((m) => m.banknots === 'RUBLS')
    }if (filter==='Dollars'){
        filterRubles = money.filter((m) => m.banknots === 'Dollars')
    }
    const onClickHandler = (name:FilterType) => {
    setFilter(name)
    }

    {/*<button onClick={()=>{setMoney(money.filter((m)=> m.banknots ==='RUBLS'))}} >Rubls</button>*/
    }
    {/*можно так*/
    }

    return (
        <div>
         <FilterComponent filterRubles={filterRubles} onClickHandler={onClickHandler}  />
        </div>


    );
};

export default AppFilter;