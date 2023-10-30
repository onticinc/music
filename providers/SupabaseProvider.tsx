"use client";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
    children: React.ReactNode;
    };

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_KEY
    );

    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
}