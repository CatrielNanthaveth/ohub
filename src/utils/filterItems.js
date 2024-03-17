export function filterItems(query, items) {
    if(query == '') {
        return items;
    }
    return items.filter(e => (e.name).toLowerCase().indexOf(query.toLowerCase()) == 0);
}