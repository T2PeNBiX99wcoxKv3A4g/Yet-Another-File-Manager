import type {LocalizationKey} from "@photino-net-utils/bridge";

/** The file types the New menu can create, in the order Explorer-like menus usually list them. */
export const CreateFileTypes: { extension: string; label: LocalizationKey }[] = [
    {extension: ".txt", label: "text_file"},
    {extension: ".md", label: "markdown_file"},
    {extension: ".json", label: "json_file"},
    {extension: ".html", label: "html_file"},
    {extension: ".css", label: "css_file"},
    {extension: ".js", label: "java_script_file"},
    {extension: ".ts", label: "type_script_file"},
    {extension: ".cs", label: "c_file"},
    {extension: ".py", label: "python_file"},
    {extension: ".bat", label: "batch_file"},
    {extension: ".ps1", label: "power_shell_file"},
    {extension: ".csv", label: "csv_file"},
    {extension: ".xml", label: "xml_file"},
    {extension: ".yml", label: "yaml_file"},
];
