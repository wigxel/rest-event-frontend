import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  flex-flow: column;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 17px 9px 0px rgba(0, 0, 0, 0.1);

  > input {
    height: 50px;
    color: white;
    text-indent: 20px;
    background: transparent;
    border: solid 1px white;

    &::placeholder {
      color: white;
    }

    &:focus {
      border-width: 2px;
    }
  }

  > div {
    height: 50px;
    background-color: white;
    color: ${props => props.theme.primary};

    a {
      padding: 0.5em 0.5em;
      border-radius: 12px;
      transition: all 0.3s ease-out;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.theme.whitesmoke};
      }
    }
  }
`;

export const SearchComponent = props => {
  return (
    <SearchStyle {...props}>
      <input type="text" placeholder="Find Vendor..." />
      <div className="flex items-center px-5">
        <b>Search Tags:</b>
        <div className="ml-2 flex-1 flex flex-start">
          <a>#african-dishes</a>
          <a>#bouquet</a>
          <a>#glamour</a>
        </div>
      </div>
    </SearchStyle>
  );
};
