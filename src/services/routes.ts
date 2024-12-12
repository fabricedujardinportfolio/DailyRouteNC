import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import type { Route } from '../types/user';

export async function addRoute(routeData: Partial<Route>) {
  try {
    const routesCollection = collection(db, 'routes');
    const newRoute = await addDoc(routesCollection, {
      ...routeData,
      createdAt: new Date().toISOString(),
      status: 'active'
    });
    return newRoute.id;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du trajet:', error);
    throw error;
  }
}

export async function fetchRoutes() {
  try {
    const routesCollection = collection(db, 'routes');
    const q = query(
      routesCollection,
      where('status', '==', 'active'),
      orderBy('departureTime')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Route[];
  } catch (error) {
    console.error('Erreur lors de la récupération des trajets:', error);
    throw error;
  }
}