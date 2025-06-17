import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react'; // optional icons

const Sidebar = ({ sections, scrollToSection, activeId }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSections = sections.filter((section) =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-72 h-screen bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 p-6 shadow-md sticky top-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 text-gray-800 dark:text-white">
                <BookOpen size={22} />
                <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Section List */}
            <ul className="space-y-1">
                {filteredSections.length > 0 ? (
                    filteredSections.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-all duration-150 text-sm font-medium
                                ${
                                    activeId === section.id
                                        ? 'bg-blue-600 text-white shadow'
                                        : 'text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700'
                                }`}
                                aria-current={activeId === section.id ? 'true' : undefined}
                            >
                                {section.title}
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-sm text-gray-500 dark:text-gray-400 px-4">No match found</li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
