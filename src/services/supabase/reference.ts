import { supabase } from '../supabase';

export interface Province {
  id: string;
  name: string;
}

export interface Commune {
  id: string;
  name: string;
  province_id: string;
}

export interface Quartier {
  id: string;
  name: string;
  commune_id: string;
}

export async function fetchProvinces(): Promise<Province[]> {
  const { data, error } = await supabase
    .from('provinces')
    .select('*')
    .order('name');
    
  if (error) throw error;
  return data;
}

export async function fetchCommunes(): Promise<Commune[]> {
  const { data, error } = await supabase
    .from('communes')
    .select('*')
    .order('name');
    
  if (error) throw error;
  return data;
}

export async function fetchQuartiers(): Promise<Quartier[]> {
  const { data, error } = await supabase
    .from('quartiers')
    .select('*')
    .order('name');
    
  if (error) throw error;
  return data;
}

export async function fetchCommunesByProvince(provinceId: string): Promise<Commune[]> {
  const { data, error } = await supabase
    .from('communes')
    .select('*')
    .eq('province_id', provinceId)
    .order('name');
    
  if (error) throw error;
  return data;
}

export async function fetchQuartiersByCommune(communeId: string): Promise<Quartier[]> {
  const { data, error } = await supabase
    .from('quartiers')
    .select('*')
    .eq('commune_id', communeId)
    .order('name');
    
  if (error) throw error;
  return data;
}