
export const createDebugLogger = (currIterator, targetTc) => {
    if (currIterator === targetTc - 1) {
        return (...args) => console.log("debug log - ", ...args)
    }
    return () => { }
}
