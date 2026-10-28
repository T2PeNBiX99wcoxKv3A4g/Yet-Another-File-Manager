interface IconProps {
    size?: number;
}

const base = (size: number) => ({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
});

export function HomeIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M3 10.5 12 3l9 7.5"/>
            <path d="M5.5 9.5V21h13V9.5"/>
            <path d="M9.5 21v-6h5v6"/>
        </svg>
    );
}

export function FolderIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/>
        </svg>
    );
}

export function FileIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 3h8l4 4v14H6z"/>
            <path d="M14 3v4h4"/>
        </svg>
    );
}

export function DriveIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="7" rx="2" width="18" x="3" y="5"/>
            <rect height="7" rx="2" width="18" x="3" y="12"/>
            <path d="M7 8.5h.01M7 15.5h.01"/>
        </svg>
    );
}

export function SearchIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <circle cx="11" cy="11" r="7"/>
            <path d="m20 20-3.5-3.5"/>
        </svg>
    );
}

export function ArrowUpIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M12 19V5"/>
            <path d="m5 12 7-7 7 7"/>
        </svg>
    );
}

export function RefreshIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M20 11a8 8 0 1 0-2.3 5.7"/>
            <path d="M20 4v7h-7"/>
        </svg>
    );
}

export function PlusIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M12 5v14"/>
            <path d="M5 12h14"/>
        </svg>
    );
}
