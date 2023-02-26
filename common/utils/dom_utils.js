export const removeNodeChildren = (node) => {
    while (node?.firstChild) {
        node.removeChild(node.firstChild);
    }
}