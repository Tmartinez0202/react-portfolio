import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`

background: black;
color: white;
text-align: center;
height: 90px;
padding: 30px;

`



function Footer() {
    return(
        <FooterWrapper>
        
        <footer>
            <p>Travis Martinez 2020 © </p>
        </footer>


        </FooterWrapper>
    );
}

export default Footer;