import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
`;

const SearchInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: solid 1px gray;
    border-radius: 3px;
`;

export {  Wrapper, Title, SearchInput }