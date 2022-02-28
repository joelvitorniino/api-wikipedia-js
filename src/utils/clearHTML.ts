export const clearHTML = (html: string) => {
    return html.replace(/<(?:.|\n)*?>/gm, '');
};