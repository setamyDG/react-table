import React, { useMemo } from 'react';
import { Layout } from '../components/layout';
import { Container, TableBasic } from '../components';
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const Basic = () => {
  const data = useMemo(
    () => [
      {
        firstName: 'Daniel',
        lastName: 'Gola',
        age: '25',
        position: 'Front-end developer',
      },
      {
        firstName: 'Norbert',
        lastName: 'Suski',
        age: '32',
        position: 'Senior front-end developer',
      },
      {
        firstName: 'Dominik',
        lastName: 'Marciniszyn',
        age: '28',
        position: 'Senior back-end developer',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Position',
            accessor: 'position',
          },
        ],
      },
    ],
    []
  );

  return (
    <Layout>
      <Container>
        <h1>Basic</h1>
        <p>Simple application using React-Table with Star custom/dummy data</p>
      </Container>
      <CenterContainer>
        <TableBasic data={data} columns={columns} />
      </CenterContainer>
    </Layout>
  );
};
export default Basic;
