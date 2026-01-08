import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sforza-quartet.pl';
    const currentDate = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/church-weddings`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/civil-weddings`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/banquets-and-concerts`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/repertoire`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/multimedia`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
