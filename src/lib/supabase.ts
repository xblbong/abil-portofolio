import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// proteksi agar build tidak error jika variabel kosong
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Peringatan: Supabase URL atau Anon Key tidak ditemukan di environment variable.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)