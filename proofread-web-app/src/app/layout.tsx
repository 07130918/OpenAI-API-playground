import { Providers } from '@/app/providers';
import type { ReactNode } from 'react';

export const metadata = {
    title: 'Journal proofreader',
    description: 'Proofread your journal entries.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
