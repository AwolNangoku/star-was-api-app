import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;

const Results = styled.ul``


const ResultItem = styled.li`
    cursor: pointer;
    display: block;
    text-align: center;
    
    &:hover {
        background-color: gray;
      }
`
const ItemContent = styled.span`
      font-weight: bold;
`
export { Title, Results, ResultItem, ItemContent }