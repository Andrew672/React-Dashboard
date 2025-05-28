'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '@radix-ui/themes';
import { dashboardPages } from '@/app/dashboard/routes';
import { Calendar, Home, LucideIcon } from 'lucide-react';

export default function DynamicBreadcrumbs() {
    const pathname = usePathname();

    if (pathname === '/' || pathname === '') {
        return null;
    }

    const segments = pathname
        .split('/')
        .filter(Boolean);

    const breadcrumbs = [
        { label: 'Dashboard', href: '/', icon: Home },
        ...segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const page = dashboardPages.find((p) => p.path === href);
            const label = page?.title ?? segment.charAt(0).toUpperCase() + segment.slice(1);
            const icon: LucideIcon = page?.icon ?? Calendar;
            return { label, href, icon };
        }),
    ];

    return (
        <nav
            aria-label="Fil d'Ariane"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm border border-gray-200 mb-4"
        >
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                    <div key={crumb.href} className="flex items-center">
                        {!isLast ? (
                            <>
                                <Link href={crumb.href} className="group">
                                    <Text
                                        as="span"
                                        color="gray"
                                        highContrast
                                        className="inline-flex items-center gap-1 transition-colors group-hover:text-blue-600 font-medium"
                                    >
                                        {crumb.icon && <crumb.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />}
                                        {crumb.label}
                                    </Text>
                                </Link>
                                <svg
                                    className="mx-2 w-4 h-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </>
                        ) : (
                            <Text
                                as="span"
                                color="gray"
                                highContrast
                                className="inline-flex items-center gap-1 font-semibold text-blue-700"
                            >
                                {crumb.icon && <crumb.icon className="w-4 h-4" />}
                                {crumb.label}
                            </Text>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}