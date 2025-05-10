'use client';

import Link from 'next/link';
import { dashboardPages } from '@/app/dashboard/routes';
import { Card, Flex, Text, Button, Grid } from '@radix-ui/themes';

export default function WidgetList() {
    return (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }}
            gap="4"
            width="auto"
            px="4"
            py="4"
        >
            {dashboardPages.map((page) => {
                const Icon = page.icon;
                return (
                    <Card key={page.path} size="3" variant="classic">
                        <Flex direction="column" gap="3">
                            <Flex align="center" gap="2">
                                {Icon && <Icon className="w-5 h-5 text-primary" />}
                                <Text size="5" weight="bold">
                                    {page.title}
                                </Text>
                            </Flex>
                            <Text color="gray">{page.description}</Text>
                            <Flex mt="auto" justify="center">
                                <Button asChild size="2" variant="surface">
                                    <Link href={page.path}>Ouvrir</Link>
                                </Button>
                            </Flex>
                        </Flex>
                    </Card>
                );
            })}
        </Grid>
    );
}
