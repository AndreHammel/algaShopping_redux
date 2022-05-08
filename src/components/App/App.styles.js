import style from 'styled-components'
import bg from '../../assets/bg.svg'

export const Wrapper = style.div`
  height: 100vh;
  color: coral;
  background-color: var(--white-100);
  background-image: url(${ bg });
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = style.div`
  width: 734px;
  height: 574px;
  background-color: var(--white);

  box-shadow: 0 3px 10px rgba(0, 0, 0, .15);
  border-radius: 20px;
  
`;