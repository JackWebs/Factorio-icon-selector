export function sortStringsAlphabetically(
    array: string[],
    descending = false
) {
    return array.sort(function(a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return descending ? 1 : -1;
        if (a.toLowerCase() > b.toLowerCase()) return descending ? -1 : 1;
        return 0;
    });
}
