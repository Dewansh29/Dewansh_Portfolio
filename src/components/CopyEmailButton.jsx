import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "dewansjha29@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            className="relative flex items-center justify-center px-10 py-4 min-w-[180px] rounded-full font-light bg-black text-white
                       w-auto h-auto cursor-pointer overflow-hidden transition-all"
        >
            <div className="flex items-center justify-center text-base">
                <AnimatePresence>
                    {copied ? (
                        <motion.p
                            key="copied"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <img src="/assets/copy-done.svg" className="w-5" alt="Check Icon" />
                            Email Copied!
                        </motion.p>
                    ) : (
                        <motion.p
                            key="copy"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 16 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <img src="/assets/copy.svg" className="w-5" alt="Copy icon" />
                            Copy Email Address
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
};

export default CopyEmailButton;