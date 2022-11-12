import React from 'react';

type BodyType ={
    titleForBody: string
}

const Body = (props: BodyType) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
};

export default Body;