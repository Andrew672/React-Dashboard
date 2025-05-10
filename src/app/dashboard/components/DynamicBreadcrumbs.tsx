'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '@radix-ui/themes';
import { dashboardPages } from '@/app/dashboard/routes';
import {Calendar, Home, LucideIcon} from "lucide-react";

export default function DynamicBreadcrumbs() {
    const pathname = usePathname();

    if (pathname === '/' || pathname === '') {
        return null; // Ne rien afficher sur la page Dashboard
    }

    const segments = pathname
        .split('/')
        .filter(Boolean);

    const breadcrumbs = [
        { label: 'Dashboard', href: '/', icon : Home },
        ...segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const page = dashboardPages.find((p) => p.path === href);
            const label = page?.title ?? segment.charAt(0).toUpperCase() + segment.slice(1);
            const icon : LucideIcon = dashboardPages.find((p) => p.path === href)?.icon ?? Calendar;
            return { label, href, icon };
        }),
    ];

    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                    <div key={crumb.href} className="flex items-center space-x-2">
                        {!isLast ? (
                            <>
                                <Link href={crumb.href}>
                                    <Text
                                        as="span"
                                        color="gray"
                                        highContrast
                                        className="hover:underline inline-flex items-center gap-1"
                                    >
                                        {crumb.icon && <crumb.icon className="w-4 h-4" />} {crumb.label}
                                    </Text>

                                </Link>
                                <span> {'>'} </span>
                            </>
                        ) : (
                            <Text
                                as="span"
                                color="gray"
                                highContrast
                                className="hover:underline inline-flex items-center gap-1"
                            >
                                {crumb.icon && <crumb.icon className="w-4 h-4" />} {crumb.label}
                            </Text>

                        )}
                    </div>
                );
            })}
        </nav>
    );
}
