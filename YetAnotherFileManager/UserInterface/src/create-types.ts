import type {LocalizationKey} from "@photino-net-utils/bridge";

/** The file types the New menu can create, in the order Explorer-like menus usually list them. */
export const CreateFileTypes: { extension: string; label: LocalizationKey }[] = [
    {extension: ".txt", label: "Text file"},
    {extension: ".md", label: "Markdown file"},
    {extension: ".json", label: "JSON file"},
    {extension: ".html", label: "HTML file"},
    {extension: ".css", label: "CSS file"},
    {extension: ".js", label: "JavaScript file"},
    {extension: ".ts", label: "TypeScript file"},
    {extension: ".cs", label: "C# file"},
    {extension: ".py", label: "Python file"},
    {extension: ".bat", label: "Batch file"},
    {extension: ".ps1", label: "PowerShell file"},
    {extension: ".csv", label: "CSV file"},
    {extension: ".xml", label: "XML file"},
    {extension: ".yml", label: "YAML file"},
];
