# DashboardReact

**DashboardReact** is a modern Next.js dashboard app to manage your team, featuring customizable widgets such as a calendar, presence tracker, goals, and more.

It also supports **authentication via GitHub** using Firebase Auth.

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
# Calendar Widget
NEXT_PUBLIC_CALENDAR_URL=<your_calendar_api_url>

# Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY=<your_firebase_api_key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your_firebase_project>.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your_project_id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your_project_id>.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your_sender_id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your_firebase_app_id>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<your_measurement_id>
```

This variable is required for the calendar widget to function correctly.

You can use [Andrew672/ReactCalendar](https://github.com/Andrew672/ReactCalendar) as a Calendar Widget.

