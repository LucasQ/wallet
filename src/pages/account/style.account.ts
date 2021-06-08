import styled from 'styled-components';

const AccountButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.55em 2em 0.55em 0.55em;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.color};
  font-size : 14px;
  text-align: left;
`;

const ChangesButton = styled.button`
  font-size: 1em;
  padding: 0.5em;
  border-radius: 12px;
  border: 2px solid lightgrey;
  background-color: transparent;
  font-size : 14px;
  text-align: center;
`;

export { AccountButton, ChangesButton };
