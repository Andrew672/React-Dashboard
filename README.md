# DashboardReact

**DashboardReact** is a modern Next.js dashboard app to manage your team, featuring customizable widgets such as a calendar, presence tracker, goals, and more.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```
Then open http://localhost:3000 in your browser.

## Environment Variables

Before starting, create a `.env.local` file at the root of the project and add:
```env
NEXT_PUBLIC_CALENDAR_URL=<your_calendar_api_url>
```

This variable is required for the calendar widget to function correctly.

You can use [Andrew672/ReactCalendar](https://github.com/Andrew672/ReactCalendar) as a Calendar Widget.

