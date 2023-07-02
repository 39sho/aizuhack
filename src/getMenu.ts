import scraping from "./scraping";

let menu: string[] | undefined;

export default async () => {
    if (menu == null) {
        menu = await getMenuFromScraping();
    }
    return menu;
}

const getMenuFromScraping = async () => {
    const tbody = await scraping();
    if (tbody == null) {
        return [];
    }

    return [...[...tbody.children][1].children].slice(1).map(e => e.textContent ?? '');
};
