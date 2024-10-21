'use client';

import React, { useEffect, useState } from 'react';
import { fetchCards, CardData } from '../../lib/cards';
import { useAuth } from '../contexts/AuthContext';
import VirtualCard from './VirtualCard';

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadCards = async () => {
      if (user) {
        const fetchedCards = await fetchCards(user.uid);
        setCards(fetchedCards);
      }
    };

    loadCards();
  }, [user]);

  return (
    <div>
      {cards.map((card, index) => (
        <VirtualCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
