// app/dashboard/calendar/page.tsx
"use client";

import { Box } from "@radix-ui/themes";
import DynamicBreadcrumbs from "@/app/dashboard/components/DynamicBreadcrumbs";
import Calendar from "@/app/calendar/components/Calendar";

export default function CalendarPage() {
    return (
        <Box style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Box
                style={{
                    height: "10%",
                    padding: "0 1rem",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <DynamicBreadcrumbs />
            </Box>

            <Box style={{ flexGrow: 1 }}>
                <Calendar />
            </Box>
        </Box>
    );
}
