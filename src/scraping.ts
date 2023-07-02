import { JSDOM } from 'jsdom';

export default async () => {
    const text = await (await fetch('http://www.gakushoku.com/univ_mn2.php')).text();
    const html = new JSDOM(text);
    const tbody = html.window.document.querySelector('tbody');
    return tbody;
};
