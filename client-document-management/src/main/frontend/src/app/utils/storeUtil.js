export function getValueAppPropertyStore(state, key) {
    if (state.application) {
        const property = state.application.filter(function (property) {
            return property.key == key;
        });
        return (property && property.length !== 0) ? property[0].value : null;
    }
    return null;
}