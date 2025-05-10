"use client";

import { Box } from "@radix-ui/themes";
import Calendar from "@/app/calendar/components/Calendar";

export default function CalendarPage() {
    return (
        <Box style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Box style={{ flexGrow: 1 }}>
                <Calendar />
            </Box>
        </Box>
    );
}
