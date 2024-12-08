import { db } from '../firebase';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore';
import type { Activity } from '../../types/dashboard';

export async function fetchUserActivities(userId: string): Promise<Activity[]> {
  try {
    const activitiesQuery = query(
      collection(db, 'activities'),
      where('userId', '==', userId),
      orderBy('date', 'desc'),
      limit(10)
    );

    const snapshot = await getDocs(activitiesQuery);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Activity[];
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    throw error;
  }
}