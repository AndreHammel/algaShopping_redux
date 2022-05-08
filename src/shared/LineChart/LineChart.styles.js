import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;

  span {
    font-size: 12px;
    color: var(--blue-200);
    margin-bottom: 4px;
  }
`;

export const ProgressBar = styled.div`
  height: 14px;
  border-radius: 3px;
  background-color: ${ props => props.color ? props.color : 'var(--blue-200)' };
  width: ${ props => props.percentage ? props.percentage : '0' }%;

  transition: .5s ease;
`