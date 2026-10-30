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

export function ArrowLeftIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M19 12H5"/>
            <path d="m12 19-7-7 7-7"/>
        </svg>
    );
}

export function ArrowRightIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
        </svg>
    );
}

export function ChevronRightIcon({size = 12}: IconProps) {
    return (
        <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
            <path d="M9.2 4.6 19.8 12 9.2 19.4z"/>
        </svg>
    );
}

export function GearIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <circle cx="12" cy="12" r="3.2"/>
            <path d="M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z"/>
        </svg>
    );
}

export function ClockIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <circle cx="12" cy="12" r="8.5"/>
            <path d="M12 7.6V12l3.1 2"/>
        </svg>
    );
}

export function TrashIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M4 7h16"/>
            <path d="M9 7V4.5h6V7"/>
            <path d="M6.5 7l1 13h9l1-13"/>
            <path d="M10 11v6M14 11v6"/>
        </svg>
    );
}

export function CheckIcon({size = 14}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="m5 12.5 4.5 4.5L19 6.5"/>
        </svg>
    );
}

export function CrossIcon({size = 14}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="m6 6 12 12M18 6 6 18"/>
        </svg>
    );
}

/** The application icon: a gradient tile with a white drawer, matching Resources/icon.ico. */
export function AppIcon({size = 18}: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true">
            <defs>
                <linearGradient id="yafm-icon-bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#4a7bf7"/>
                    <stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
                <linearGradient id="yafm-icon-line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#6366f1"/>
                    <stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
            </defs>
            <rect fill="url(#yafm-icon-bg)" height="128" rx="30" width="128"/>
            <path d="M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z" fill="#dbeafe" opacity="0.9"/>
            <rect fill="#f8fafc" height="44" rx="12" width="68" x="30" y="52"/>
            <rect fill="url(#yafm-icon-line)" height="7" rx="3.5" width="32" x="43" y="70"/>
        </svg>
    );
}

export function TextIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 3h9l4 4v14H6z"/>
            <path d="M15 3v4h4"/>
            <path d="M9 12h7M9 15h7M9 18h4"/>
        </svg>
    );
}

export function CodeIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="m8 8-4 4 4 4"/>
            <path d="m16 8 4 4-4 4"/>
            <path d="m13 5-2 14"/>
        </svg>
    );
}

export function ImageIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="16" rx="2.5" width="18" x="3" y="4"/>
            <circle cx="8.5" cy="9.5" r="1.4"/>
            <path d="m4 17 5-5 4 4 3-3 4 4"/>
        </svg>
    );
}

export function VideoIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="14" rx="2.5" width="14" x="3" y="5"/>
            <path d="m17 10 4-2.5v9L17 14z"/>
        </svg>
    );
}

export function AudioIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M9 17V6l10-2v10"/>
            <circle cx="6.5" cy="17.5" r="2.5"/>
            <circle cx="16.5" cy="15.5" r="2.5"/>
        </svg>
    );
}

export function ArchiveIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="16" rx="2.5" width="16" x="4" y="4"/>
            <path d="M12 4v3M12 10v2M12 15v2"/>
        </svg>
    );
}

export function PdfIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 3h9l4 4v14H6z"/>
            <path d="M15 3v4h4"/>
            <path d="M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9"/>
        </svg>
    );
}

export function ExecutableIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="16" rx="3" width="16" x="4" y="4"/>
            <path d="m9 9 3 3-3 3M14 15h3"/>
        </svg>
    );
}

export function FontIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 20 12 4l6 16"/>
            <path d="M8.5 14h7"/>
        </svg>
    );
}

export function DatabaseIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <ellipse cx="12" cy="6.5" rx="7" ry="2.8"/>
            <path d="M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5"/>
            <path d="M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5"/>
        </svg>
    );
}

export function ConfigIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 3h8l4 4v14H6z"/>
            <path d="M9 12h6M9 15h6"/>
        </svg>
    );
}

export function SpreadsheetIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="16" rx="2.5" width="16" x="4" y="4"/>
            <path d="M4 9h16M4 15h16M10 4v16"/>
        </svg>
    );
}

export function PresentationIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="11" rx="2" width="16" x="4" y="4"/>
            <path d="M12 15v4M8.5 21l3.5-3 3.5 3"/>
        </svg>
    );
}

export function DocumentIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M6 3h9l4 4v14H6z"/>
            <path d="M15 3v4h4"/>
            <path d="M9 12h6M9 15h6M9 18h3"/>
        </svg>
    );
}

export function OverviewIcon({size = 18}: IconProps) {
    return (
        <svg {...base(size)}>
            <rect height="7" rx="1.6" width="7" x="3.5" y="3.5"/>
            <rect height="7" rx="1.6" width="7" x="13.5" y="3.5"/>
            <rect height="7" rx="1.6" width="7" x="3.5" y="13.5"/>
            <rect height="7" rx="1.6" width="7" x="13.5" y="13.5"/>
        </svg>
    );
}

export function PencilIcon({size = 16}: IconProps) {
    return (
        <svg {...base(size)}>
            <path d="M4 20h4L20 8l-4-4L4 16z"/>
            <path d="m14 6 4 4"/>
        </svg>
    );
}
