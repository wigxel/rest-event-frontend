import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import { compose } from 'lodash/fp';
import Naira from '../../assets/svgs/naira_symbol.svg';
import { color, fullWidth } from '../../styles/helpers';
// import { log, trace } from '../../libs/helpers';
import { numberFormat } from '../../libs/numbers/currency.js';

const InputStyle = styled.div`
  height: 40px;
  min-width: 250px;
  box-sizing: border-box;
  padding: 0 1rem;
  align-items: center;
  border-radius: 12px;
  display: inline-flex;
  background-color: white;
  border: solid 1px transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  img {
    width: 30px;
    height: 30px;
  }

  > input {
    margin: 0;
    text-align: right;
    font-size: 1.2rem;
    font-family: var(--input-font);
    line-height: 30px;
    flex: 1;
    border: none;
    appearance: none;
  }

  ${props =>
    props.focus &&
    css`
      border: solid 1px ${color('primary')};
    `}
  ${fullWidth()}

  ${props =>
    props.large &&
    css`
      height: 50px;
      img {
        height: 40px;
      }
      input {
        font-size: 1.7rem;
      }
    `}
`;

const INVALID_MESSAGE = 'Invalid Number provided';
const number = char => _.isNumber(char) && !_.isNaN(char);
const validateInput = evt => {
  const char = parseInt(evt.key);
  const allowedCodes = [8, 9, 190, 37, 38, 39, 40];
  // log(evt.keyCode);
  if (allowedCodes.includes(evt.keyCode) || number(char)) return;
  // log('I prevented');
  evt.preventDefault();
};

const handleNaN = fn => value => {
  if (value !== 'NaN') return value;
  fn();
  return 0;
};
export const clean = value => _.replace(String(value), /,/gm, '');

const NumberInput = props => {
  const [prop, setProp] = useState({
    value: ''
  });
  const [focus, setFocus] = useState(false);

  const allProps = { ...props, focus };
  const formatValue = compose(
    // trace('returning to zero(0)'),
    handleNaN(() => props.isInvalid(INVALID_MESSAGE)),
    // trace('naira'),
    numberFormat,
    // trace('cleaned')
    clean
  );

  return (
    <InputStyle {...allProps}>
      <img src={Naira} alt="cur" title="currency" />
      <input
        type="text"
        placeholder="0.0"
        value={prop.value}
        onKeyDown={evt => {
          evt.keyCode === 13 ? evt.target.blur() : validateInput(evt);
        }}
        onChange={({ target }) =>
          setProp({
            value: clean(target.value)
          })
        }
        onFocus={({ target }) => {
          setFocus(true);
          setProp({
            value: clean(target.value)
          });
        }}
        onBlur={({ target }) => {
          setFocus(false);
          setProp({
            value: formatValue(target.value)
          });
        }}
      />
    </InputStyle>
  );
};

NumberInput.defaultProps = {
  isInvalid: () => {},
  large: false,
  fullWidth: false
};

export default NumberInput;
