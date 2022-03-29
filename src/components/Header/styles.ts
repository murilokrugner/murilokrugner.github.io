import {useContext} from 'react';
import styled from 'styled-components';
import globalStylesContext from './context/globalStylesContext';

const styles = useContext(globalStylesContext);

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  img {
    width: 250px;
    height: 250px;

    border-radius: 250px;
  }

  h1 {
    margin-top: 10px;
  }
`;
