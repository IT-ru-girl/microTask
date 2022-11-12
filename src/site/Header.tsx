import React from 'react';

type HeaderType ={
    title:string
}

const Header = (props: HeaderType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Header;