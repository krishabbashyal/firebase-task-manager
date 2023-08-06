import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.VUE_APP_SUPABASE_URL
const supabaseAPI = process.env.VUE_APP_SUPABASE_API_KEY

export const supabase = createClient(supabaseURL, supabaseAPI)