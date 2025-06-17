// src/Docs.jsx
import React, { useEffect, useRef, useState } from 'react';
import docsData from '/src/data/docs.json';
import Sidebar from './Sidebar.jsx';
import DocSection from './DocSection.jsx';

const Docs = () => {
    const [sections, setSections] = useState([]);
    const sectionRefs = useRef({});
    const [activeId, setActiveId] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setSections(docsData);
    }, []);

    const scrollToSection = (id) => {
        const element = sectionRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            { rootMargin: '-50% 0px -49% 0px' }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="flex h-screen font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed md:static z-20`}>
                <Sidebar sections={sections} scrollToSection={scrollToSection} activeId={activeId} />
            </div>

            <main className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <button
                        className="md:hidden px-3 py-2 border rounded text-sm dark:text-white"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰ Menu
                    </button>
                </div>

                {sections.map((section) => (
                    <DocSection
                        key={section.id}
                        ref={(el) => (sectionRefs.current[section.id] = el)}
                        section={section}
                    />
                ))}
            </main>
        </div>
    );
};

export default Docs;
