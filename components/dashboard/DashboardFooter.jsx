import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/auth';

export default async function DashboardFooter() {
    const session = await getAuthSession();

    if (session?.user?.role !== 'client') {
        redirect('/login');
    }

    if (session?.user?.role !== 'client') {
        return null;
    }

    return (
        <footer className="loggedfooter">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <ul className="privacylist">
                        <li className="privacylist-item">
                            <a href="#" className="privacylist-link">
                                Privacy
                            </a>
                        </li>

                        <li className="privacylist-item">|</li>

                        <li className="privacylist-item">
                            <a href="#" className="privacylist-link">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
