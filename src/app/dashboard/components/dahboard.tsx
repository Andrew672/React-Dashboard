'use client';

import WidgetList from "@/app/dashboard/components/WidgetList";
import {Grid, Heading} from "@radix-ui/themes";

export default function DashboardPage() {
    return (
        <main style={{ padding: 24 }}>
            <Heading as="h4">Dashboard</Heading>
            <p>Welcome to the dashboard! Here you can manage your widgets.</p>
            <Grid>
                <WidgetList />
            </Grid>
        </main>
    );
}
