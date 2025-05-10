'use client';

import React from 'react';
import DashboardPage from "@/app/dashboard/components/dahboard";

export default function MainApplication() {

    return (
        <div className="relative flex w-full flex-col gap-4 px-4 pt-4 items-center justify-start  ">
            <DashboardPage />
        </div>

    );
}
