import React, { useState } from 'react';
import { ClipboardCopy, Check, Eye, EyeOff } from 'lucide-react'; // icons

const DocSection = React.forwardRef(({ section }, ref) => {
    const [showOutput, setShowOutput] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (section.code) {
            navigator.clipboard.writeText(section.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div ref={ref} id={section.id} className="mb-20 scroll-mt-24 px-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 border-b pb-1 border-gray-300 dark:border-gray-700">
                {section.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
                {section.description}
            </p>

            {/* Table (if exists) */}
            {section.table && (
                <div className="mb-6 overflow-x-auto">
                    <table className="table-auto border-collapse w-full text-sm border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden shadow-sm">
                        <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            {section.table.headers.map((header, idx) => (
                                <th key={idx} className="px-4 py-2 border font-semibold text-gray-800 dark:text-gray-100">
                                    {header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-4 py-2 border text-gray-700 dark:text-gray-200 whitespace-pre-wrap">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Code Block */}
            {section.code && (
                <div className="relative mb-4 rounded-md shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2 p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1 text-xs px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                        >
                            {copied ? <Check size={14} /> : <ClipboardCopy size={14} />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                        {section.output && (
                            <button
                                onClick={() => setShowOutput(!showOutput)}
                                className="flex items-center gap-1 text-xs px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition"
                            >
                                {showOutput ? <EyeOff size={14} /> : <Eye size={14} />}
                                {showOutput ? 'Hide Output' : 'Show Output'}
                            </button>
                        )}
                    </div>

                    {/* Code */}
                    <pre className="bg-gray-800 text-white text-sm p-4 overflow-x-auto font-mono">
                        <code className="whitespace-pre">{section.code}</code>
                    </pre>
                </div>
            )}

            {/* Output */}
            {showOutput && section.output && (
                <div className="mt-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-4 text-sm text-gray-900 dark:text-gray-100">
                    <pre className="whitespace-pre-wrap">{section.output}</pre>
                </div>
            )}
        </div>
    );
});

export default DocSection;
