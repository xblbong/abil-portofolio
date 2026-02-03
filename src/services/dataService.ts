import { supabase } from '../lib/supabase';
import { Certificate, Experience, Project, Skill } from '../types';

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
  return data || [];
};

export const getSkills = async (): Promise<Skill[]> => {
  const { data } = await supabase.from('skills').select('*').order('level', { ascending: false });
  return data || [];
};

export const getExperiences = async (): Promise<Experience[]> => {
  const { data } = await supabase.from('experience').select('*').order('start_date', { ascending: false });
  return data || [];
};

export const getCertificates = async (): Promise<Certificate[]> => {
  const { data } = await supabase.from('certificates').select('*');
  return data || [];
};