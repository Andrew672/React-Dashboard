'use client';

import * as React from 'react';
import {Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup,} from 'cmdk';
import { useRouter } from 'next/navigation';
import { dashboardPages, dashboardDocuments } from '@/app/dashboard/routes';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';

export default function GlobalSearchBar() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();

    const [search, setSearch] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);

    const fusePages = new Fuse(dashboardPages, {
        keys: ['title'],
        threshold: 0.3,
    });

    const fuseDocs = new Fuse(dashboardDocuments, {
        keys: ['title'],
        threshold: 0.3,
    });

    const filteredPages = search ? fusePages.search(search).map(res => res.item) : [];
    const filteredDocs = search ? fuseDocs.search(search).map(res => res.item) : [];
    const hasResults = filteredPages.length > 0 || filteredDocs.length > 0;

    React.useEffect(() => {
        let lastPress = 0;
        const handler = (e: KeyboardEvent) => {
            const now = Date.now();
            if (e.key === 'Shift') {
                if (now - lastPress < 500) {
                    inputRef.current?.focus();
                }
                lastPress = now;
            }
            if (e.key === 'Escape') {
                setSearch('');
                inputRef.current?.blur();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const handleSelect = (path: string) => {
        setSearch('');
        router.push(path);
    };

    const handleClear = () => {
        setSearch('');
        inputRef.current?.focus();
    };

    return (
        <div className="w-full max-w-2xl mx-auto pt-20 px-4">
            <Command className="relative border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 shadow-md">
                <div
                    className="flex items-center px-4 py-2"
                    onClick={() => inputRef.current?.focus()}
                >
                    <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400 mr-2" />
                    <CommandInput
                        ref={inputRef}
                        value={search}
                        onValueChange={setSearch}
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            const next = e.relatedTarget as HTMLElement | null;
                            const stillInBox = next?.closest('[cmdk-root]') != null;
                            if (!stillInBox) {
                                setIsFocused(false);
                                setSearch(''); // On efface à la sortie
                            }
                        }}
                        placeholder="Rechercher… (Shift Shift)"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                    />
                    {search && (
                        <button
                            onMouseDown={(e) => {
                                e.preventDefault();
                                handleClear();
                            }}
                            className="absolute right-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                            aria-label="Effacer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {search && isFocused && (
                    <CommandList className="absolute left-0 right-0 top-full z-50 bg-white dark:bg-zinc-900 max-h-60 overflow-y-auto rounded-b-lg shadow-lg border-x border-b border-zinc-200 dark:border-zinc-700">
                        {hasResults ? (
                            <>
                                {filteredPages.length > 0 && (
                                    <CommandGroup heading="Applications" className="px-4 pt-3 text-xs text-zinc-400 uppercase tracking-wide">
                                        {filteredPages.map((page) => {
                                            const Icon = page.icon;
                                            return (
                                                <CommandItem
                                                    key={page.path}
                                                    onSelect={() => handleSelect(page.path)}
                                                    className="px-4 py-2 flex items-center gap-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded"
                                                >
                                                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                                                    {page.title}
                                                </CommandItem>
                                            );
                                        })}
                                    </CommandGroup>
                                )}
                                {filteredDocs.length > 0 && (
                                    <CommandGroup heading="Documents" className="px-4 pt-3 text-xs text-zinc-400 uppercase tracking-wide">
                                        {filteredDocs.map((doc) => {
                                            const Icon = doc.icon;
                                            return (
                                                <CommandItem
                                                    key={doc.path}
                                                    onSelect={() => handleSelect(doc.path)}
                                                    className="px-4 py-2 flex items-center gap-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded"
                                                >
                                                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                                                    {doc.title}
                                                </CommandItem>
                                            );
                                        })}
                                    </CommandGroup>
                                )}
                            </>
                        ) : (
                            <CommandEmpty className="px-4 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                                Aucune correspondance.
                            </CommandEmpty>
                        )}
                    </CommandList>
                )}
            </Command>
        </div>
    );
}
