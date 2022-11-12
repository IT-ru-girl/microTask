import React from 'react';

type FooterType= {
    titleForFooter: string
}
const Footer = (props:FooterType) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    );
};

export default Footer;