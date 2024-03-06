'use client';

import { Box, Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { journal } from '@/lib/templates';
import { useProofreading } from '@/lib/useProofreading';

const formattedJournal = journal.replace(/ +/g, ' ').replace(/\n+/g, '\n').trim();

const Home: NextPage = () => {
    const { journal, setJournal, secret, setSecret, proofread, handleSubmit, isLoading } =
        useProofreading(formattedJournal);

    return (
        <Flex
            bgGradient='linear(to-r, black, blue.900)'
            minH='100vh'
            justify='center'
            align='center'
        >
            <Box
                w='90vw'
                bg='white'
                borderRadius='lg'
                shadow='lg'
                p={8}
                overflowY='scroll'
            >
                <Box
                    as='h2'
                    fontSize='3xl'
                    fontWeight='bold'
                    background='linear-gradient(to right, #ff00cc, #3333cc)'
                    bgClip='text'
                    pb={2}
                >
                    Journal Proofreading
                </Box>
                <Flex direction={['column', 'column', 'row']} gap={6}>
                    <Box flex={1}>
                        <Heading size='md' mb={2}>
                            Journal Entry:
                        </Heading>
                        <Box pb={4}>
                            <Textarea
                                value={journal}
                                onChange={(e) => setJournal(e.target.value)}
                                placeholder='Enter your journal here'
                                size='lg'
                                rows={18}
                            />
                        </Box>
                        <Button
                            width='full'
                            colorScheme='teal'
                            isLoading={isLoading}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                    <Box flex={1}>
                        <Heading size='md' mb={2}>
                            Proofread Text:
                        </Heading>
                        <Textarea
                            size='lg'
                            // minHeight='60vh'
                            isReadOnly
                            value={proofread}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Home;
