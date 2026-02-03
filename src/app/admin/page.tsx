"use client";
import { supabase } from '@/src/lib/supabase';
import { Project } from '@/src/types';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*');
    if (data) setProjects(data);
    setLoading(false);
  }

  async function handleAddProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProject = {
      title: formData.get('title'),
      description: formData.get('description'),
      tech_stack: (formData.get('tech') as string).split(','),
      image_url: formData.get('image'),
    };

    const { error } = await supabase.from('projects').insert([newProject]);
    if (!error) {
      alert("Project berhasil ditambah!");
      fetchProjects();
    }
  }

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-10">Admin Portfolio Settings</h1>
      
      {/* Form Tambah Project */}
      <form onSubmit={handleAddProject} className="mb-20 space-y-4 max-w-xl bg-gray-100 p-6 rounded-xl">
        <h2 className="font-bold">Tambah Project Baru</h2>
        <input name="title" placeholder="Judul Project" className="w-full p-2 border" required />
        <textarea name="description" placeholder="Deskripsi" className="w-full p-2 border" required />
        <input name="tech" placeholder="Tech Stack (pisahkan dengan koma)" className="w-full p-2 border" required />
        <input name="image" placeholder="Image URL" className="w-full p-2 border" required />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Simpan Project</button>
      </form>

      {/* List Project */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="font-bold">List Project Saat Ini</h2>
        {projects.map(p => (
          <div key={p.id} className="p-4 border flex justify-between">
            <span>{p.title}</span>
            <button className="text-red-500">Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}