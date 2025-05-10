'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Separator from '@radix-ui/react-separator';
import { Text } from '@radix-ui/themes';
import { dashboardPages } from '@/app/dashboard/routes';

export default function DynamicBreadcrumbs() {
    const pathname = usePathname();

    const segments = pathname
        .split('/')
        .filter(Boolean);

    // Construit les segments avec leurs href cumulés
    const breadcrumbs = [
        { label: 'Dashboard', href: '/' },
        ...segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const page = dashboardPages.find((p) => p.path === href);
            const label = page?.title ?? segment.charAt(0).toUpperCase() + segment.slice(1);
            return { label, href };
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
                                    <Text as="span" color="gray" highContrast className="hover:underline">
                                        {crumb.label}
                                    </Text>
                                </Link>
                                <Separator.Root
                                    decorative
                                    orientation="vertical"
                                    className="h-4 w-px bg-gray-400"
                                />
                            </>
                        ) : (
                            <Text as="span" weight="medium">
                                {crumb.label}
                            </Text>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
