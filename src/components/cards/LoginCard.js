import React from 'react';
import styled from 'styled-components';
import cardBackground from '../../assets/svgs/edge-curvy.svg';
import lines from '../../assets/svgs/3-lines-edge.svg';

const CardStyle = styled.section`
  max-width: 400px;
  min-height: 200px;
  border-radius: 23px;
  border: 2px solid rgba(112, 93, 245, 0.19);
  background-color: ${a => a.theme.white};
  padding: 1.5rem 0;
  margin: 0 1.5rem;

  .card-holder {
    width: auto;
    padding: 3rem;
    padding-right: 5rem;
    margin-right: -1rem;
    margin-left: -1rem;
    background: url(${cardBackground}) no-repeat calc(100% + 15px) -10px,
      url(${lines}) no-repeat -15px calc(100% + 15px) / 90px 90px;
    border-radius: 12px;
    background-color: white;
    background-color: ${a => a.theme.white};
    box-shadow: 0 11px 24px rgba(62, 62, 62, 23%);

    @media screen and (max-width: 500px) {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

const LoginCard = props => (
  <CardStyle {...props}>
    <div className="card-holder">{props.children}</div>
  </CardStyle>
);

export default LoginCard;
