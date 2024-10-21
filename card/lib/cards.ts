import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, serverTimestamp, doc } from 'firebase/firestore';
import { db } from './firebase';

export interface CardData {
  title: string;
  content: string[];
  images?: string[];
}

export const addCard = async (userId: string, cardData: CardData): Promise<void> => {
  try {
    await addDoc(collection(db, 'cards'), {
      ...cardData,
      userId,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding card:', error);
  }
};

export const fetchCards = async (userId: string): Promise<CardData[]> => {
  try {
    const q = query(collection(db, 'cards'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    const cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as unknown as CardData[];
    return cards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

export const updateCard = async (cardId: string, updatedData: Partial<CardData>): Promise<void> => {
  try {
    const cardDoc = doc(db, 'cards', cardId);
    await updateDoc(cardDoc, updatedData);
  } catch (error) {
    console.error('Error updating card:', error);
  }
};

export const deleteCard = async (cardId: string): Promise<void> => {
  try {
    const cardDoc = doc(db, 'cards', cardId);
    await deleteDoc(cardDoc);
  } catch (error) {
    console.error('Error deleting card:', error);
  }
};
