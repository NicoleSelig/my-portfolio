export function addClasses(...classNames: string[]): string {
    return classNames.filter(Boolean).join(" ")
}
