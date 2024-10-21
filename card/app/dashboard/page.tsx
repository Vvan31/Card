'use client';

import React from 'react';
import CardForm from '../components/CardForm';
import CardList from '../components/CardList';
import withAuth from '../../lib/withAuth';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Your Cards</h1>
      <CardForm />
      <CardList />
    </div>
  );
};

export default withAuth(Dashboard);
