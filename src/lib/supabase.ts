import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mijafkuyuxxpkblpwifs.supabase.co";
const supabaseKey =
  import.meta.env.VITE_SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pamFma3V5dXh4cGtibHB3aWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxODUxNTIsImV4cCI6MjA1ODc2MTE1Mn0.G7LNw3674fIQWH3ve3N2BArfx20zhHX9V72Lw-yqtb4";

export const supabase = createClient(supabaseUrl, supabaseKey);
