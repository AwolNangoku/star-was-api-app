import styled from 'styled-components';

const Wrapper = styled.section`
    text-align: center;
`;

const Title = styled.h2`
  flex: 0;
  text-align: center;
`;

const Results = styled.ul``


const ResultItem = styled.li`
    display: block;
    cursor: pointer;
    
    &:hover {
        background-color: gray;
        padding: 0.5em;
      }
`

export {  Wrapper, Title, Results, ResultItem }