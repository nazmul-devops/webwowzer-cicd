'use client';

import AOS from 'aos';
import { useEffect } from 'react';

import '@/public/assets/css/aos/aos.css';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            delay: 200,
        });
    }, []);

    return null;
}
