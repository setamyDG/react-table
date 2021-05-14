import React, { useMemo } from 'react';
import { Layout } from '../components/layout';
import { Container, TableFooters } from '../components';
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
        age: 25,
        position: 'Front-end developer',
      },
      {
        firstName: 'Norbert',
        lastName: 'Suski',
        age: 32,
        position: 'Senior front-end developer',
      },
      {
        firstName: 'Dominik',
        lastName: 'Marciniszyn',
        age: 28,
        position: 'Senior back-end developer',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        Footer: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            Footer: 'First Name',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            Footer: 'Last Name',
          },
        ],
      },
      {
        Header: 'Info',
        Footer: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(() => info.rows.reduce((sum, row) => row.values.age + sum, 0), [info.rows]);

              return <>Total: {total}</>;
            },
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
        <h1>Footers</h1>
        <p>Simple application using React-Table with Star custom/dummy data</p>
      </Container>
      <CenterContainer>
        <TableFooters data={data} columns={columns} />
      </CenterContainer>
    </Layout>
  );
};
export default Basic;
