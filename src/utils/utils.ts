export function getProperty(object: any, propertyPath: string): any {
    return propertyPath.split(".").reduce(function(p, prop) {
        return p[prop];
    }, object);
}

export function sortPropertyAlphabetically(
    array: any[],
    propertyPath: string,
    descending = false
) {
    return array.sort(function(a, b) {
        const stringA = getProperty(a, propertyPath).toLowerCase();
        const stringB = getProperty(b, propertyPath).toLowerCase();
        if (stringA < stringB) return descending ? 1 : -1;
        if (stringA > stringB) return descending ? -1 : 1;
        return 0;
    });
}

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
