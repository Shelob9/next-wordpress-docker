let siteUrl =  process.env.SITE_URL || 'https://example.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`
    ],
  },
}