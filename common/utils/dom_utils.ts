export const removeNodeChildren = (node: HTMLElement) => {
    while (node?.firstChild) {
        node.removeChild(node.firstChild);
    }
}