"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { Auth } from '@supabase/auth-ui-react'

const AuthModal = () => {

    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();

    return (
        <Modal
            title="Welcome!"
            description="Login to your account"
            isOpen
            onChange={() => {}}
        >
            <Auth 
                supabaseClient={supabaseClient}
                appearance={{
                    theme:ThemeSupa
                }}
            />
        </Modal>
    );
}

export default AuthModal;

