'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#FF6347"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}
