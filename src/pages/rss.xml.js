import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'AchroDev | Blog',
        description: 'My Astro Journey',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./../*.md')),
        customData: `<language>en-us</language>`,
    });
}