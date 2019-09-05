export function getValueAppPropertyStore(state, key) {
    if (state.application) {
        const payload = state.application.filter(function (payload) {
            return payload.key == key;
        });
        return (payload && payload.length !== 0) ? payload[0].value : null;
    }
    return null;
}