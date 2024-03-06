'use client';
import { journal } from '@/lib/templates';
import { useProofreading } from '@/lib/useProofreading';
import { Box, Button, HStack, Heading, Image, Link, Stack, Textarea } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextImage from 'next/image';

const formattedJournal = journal.replace(/ +/g, ' ').replace(/\n+/g, '\n').trim();

const Home: NextPage = () => {
    const { journal, setJournal, proofread, handleSubmit, isLoading } =
        useProofreading(formattedJournal);

    return (
        <Box minH='100vh' bgGradient='linear(to-r, black, blue.900)'>
            <HStack pt={{ base: 4, md: 16 }} justify='center'>
                <Box
                    w='90vw'
                    bg='white'
                    borderRadius='lg'
                    shadow='lg'
                    px={8}
                    py={6}
                    overflowY='scroll'
                >
                    <Box
                        as='h2'
                        fontSize='3xl'
                        fontWeight='bold'
                        background='linear-gradient(to right, #ff00cc, #3333cc)'
                        bgClip='text'
                    >
                        Journal Proofreading
                    </Box>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        align={{ base: 'center', md: 'start' }}
                        gap={6}
                    >
                        <Box flex={1}>
                            <Heading size='md' mb={2}>
                                Journal Entry:
                            </Heading>
                            <Box pb={4} w={{ base: '80vw', md: 'full' }}>
                                <Textarea
                                    placeholder='Enter your journal here'
                                    size='lg'
                                    rows={18}
                                    resize='none'
                                    value={journal}
                                    onChange={(e) => setJournal(e.target.value)}
                                />
                            </Box>
                            <Button
                                width='full'
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
                            <Box w={{ base: '80vw', md: 'full' }}>
                                <Textarea
                                    size='lg'
                                    rows={18}
                                    resize='none'
                                    isReadOnly
                                    value={proofread}
                                />
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </HStack>
            {/* footer */}
            <Box pt={40}>
                <Box py={4} borderColor='#FFF' borderTopWidth='1px'>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        justifyContent='flex-start'
                        alignItems='center'
                        pl={4}
                    >
                        <Link
                            href='https://hi-there-this-is-kota.vercel.app'
                            isExternal
                            color='#FFF'
                            fontSize='sm'
                            _hover={{ color: '#00c8ff' }}
                        >
                            Developer&apos;s Website
                        </Link>
                        <Link href='https://www.buymeacoffee.com/hi.im.kota' isExternal>
                            <Image
                                src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                                alt='Buy Me A Coffee'
                                h='30px'
                                w='108px'
                            />
                        </Link>
                        <Link href='https://www.paypal.com/paypalme/kotawebdev' isExternal>
                            <Image src='/paypal.png' alt='Paypal' h='45px' w='90px' />
                        </Link>
                        <NextImage src='/OpenAI.jpg' alt='OpenAI' width={160} height={160} />
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
