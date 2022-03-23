import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://yniiliqbnygtdwfjgczn.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluaWlsaXFibnlndGR3ZmpnY3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNjYyMzksImV4cCI6MTk2MzY0MjIzOX0.QOcS6HIPrfo5JkKQrf_kEAHCWfBV06eq8PNAt2so3x4')

export {
    supabase
}