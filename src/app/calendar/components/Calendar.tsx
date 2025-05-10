'use client';

import { Box } from '@radix-ui/themes';
import { CALENDAR_URL } from '@/app/utils/constants';

export default function Calendar() {
    return (
        <Box
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid var(--gray-a5)',
                overflow: 'hidden',
            }}
        >
            <iframe
                src={CALENDAR_URL}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Calendar"
            />
        </Box>
    );
}
