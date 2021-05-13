import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/layout';
import { Container } from '../components';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <h1>{t('welcome')}</h1>
        <p>Simple application using React-Table with Star custom/dummy data</p>
      </Container>
    </Layout>
  );
};
export default Home;
