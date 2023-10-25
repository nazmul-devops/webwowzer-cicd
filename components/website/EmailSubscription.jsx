'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

import axios from '@/lib/axios';

export default function EmailSubscription() {
    const [email, setEmail] = useState('');

    const handleEmailSubscription = async (e) => {
        e.preventDefault();

        try {
            if (!email) {
                toast.error('Please enter your email address!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                return;
            }

            const response = await axios.post('/api/email-subscription', {
                email,
            });

            if (response.status === 200) {
                setEmail('');

                toast.success('Thank you for subscribing to our newsletter!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error('Please enter a valid email address!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            } else if (error.response.status === 409) {
                toast.error('You have already subscribed to our newsletter!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            } else {
                toast.error('Something went wrong. Please try again later!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }
        }
    };

    return (
        <form className="subscribeform">
            <input
                type="text"
                placeholder="Email address"
                className="textfield"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="btn-subscribe" onClick={handleEmailSubscription}>
                <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.901574 5.43603C0.962951 5.42597 1.02506 5.42132 1.08721 5.42214H11.6694L11.4387 5.31368C11.2131 5.2058 11.0079 5.05897 10.8323 4.87985L7.86477 1.88098C7.47394 1.50395 7.40828 0.897436 7.70915 0.443911C8.05933 -0.039371 8.73088 -0.144304 9.20914 0.209574C9.24778 0.23818 9.2845 0.269362 9.31902 0.302916L14.6852 5.72582C15.1046 6.14915 15.105 6.83586 14.6861 7.25965C14.6858 7.25993 14.6855 7.26023 14.6852 7.2605L9.31902 12.6834C8.89931 13.1064 8.21978 13.1054 7.80122 12.6813C7.76828 12.6479 7.73753 12.6124 7.70915 12.5749C7.40828 12.1214 7.47394 11.5149 7.86477 11.1379L10.8269 8.13359C10.9844 7.97429 11.1654 7.84072 11.3635 7.73772L11.6855 7.5913H1.14627C0.598014 7.61187 0.117 7.22485 0.0140018 6.68025C-0.0808792 6.08899 0.316489 5.53195 0.901574 5.43603Z"
                        fill="white"
                    />
                </svg>
            </button>
        </form>
    );
}
