'use client';

import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export const useProofreading = (initialJournal: string) => {
    const [journal, setJournal] = useState(initialJournal);
    const [proofread, setProofread] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post<string>('/api/proofread', { journal });
            setProofread(res.data);
        } catch (error: any) {
            console.error(error);
            toast({
                title: 'Request failed.',
                description: 'There was an error with your request.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { journal, setJournal, proofread, handleSubmit, isLoading };
};
