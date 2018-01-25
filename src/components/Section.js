import styled from 'styled-components';

export default styled.section`
  color: #555;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${props => props.secondary &&
    'background-color: #f5f5f5;'}
  @media screen and (min-width: 800px) {
    padding: 100px 80px;
  }
`;
