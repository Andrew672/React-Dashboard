import {
    CalendarDays,
    User,
    Settings, BookOpen, FileText,
} from 'lucide-react';

export const dashboardPages = [
    {
        title: 'Calendrier',
        path: '/calendar',
        description: 'Visualise tes événements',
        icon: CalendarDays,
    },
    {
        title: 'Profile',
        path: '/login',
        description: 'Gère ton profil utilisateur',
        icon: User,
    },
    {
        title: 'Settings',
        path: '/settings',
        description: 'Paramètres de l’application',
        icon: Settings,
    },
];


export const dashboardDocuments = [
    { title: 'Guide utilisateur', path: '/docs/user-guide', icon: BookOpen },
    { title: 'Conditions générales', path: '/docs/terms', icon: FileText },
];
