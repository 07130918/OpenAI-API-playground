'use client';

import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export const useProofreading = (initialJournal: string) => {
    const [journal, setJournal] = useState(initialJournal);
    const [password, setPassword] = useState('');
    const [proofread, setProofread] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post<string>('/api/proofread', { journal, password });
            setProofread(res.data);
            toast({
                title: "Request success.",
                description: "We've received your request.",
                status: "success",
                duration: 3000,
                isClosable: true,
                variant: "subtle",
            })
        } catch (error: any) {
            console.error(error);
            const description = error.response.status === 401
                ? "Password is incorrect."
                : "There was an error with your request.";
            toast({
                title: "Request failed.",
                description,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setIsLoading(false);
        }
    };

    return { journal, setJournal, password, setPassword, proofread, handleSubmit, isLoading };
}
