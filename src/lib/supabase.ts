import { createClient } from '@supabase/supabase-js'

// Ambil value dan hapus spasi/karakter tak terlihat jika ada
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || ''

// Validasi agar tidak crash saat build
const isUrlValid = supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://')

export const supabase = createClient(
  isUrlValid ? supabaseUrl : 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
)