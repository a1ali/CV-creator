import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" },
    },
};

const svgVariants = {
    hidden: { rotate: 45 },
    visible: {
        rotate: 0,
        transition: { duration: 1 },
    },
};

function Header() {
    return (
        <h1 className="text-4xl font-semibold px-6 pt-6 text-gray-100 flex space-x-2 mb-2 items-center h-14">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    variants={pathVariants}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
            </motion.svg>
            <span>CVENETOR</span>
        </h1>
    );
}

export default Header;
