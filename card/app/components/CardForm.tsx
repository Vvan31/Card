'use client';

import React, { useState, FormEvent } from 'react';
import { addCard } from '../../lib/cards';
import { useAuth } from '../contexts/AuthContext';

const CardForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { user } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cardData = { title, content: content.split('\n'), images: [] }; // Adjust cardData structure as needed
    if (user) {
      await addCard(user.uid, cardData);
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default CardForm;
