// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import {getAllPostsWithSlugAndDate} from '../../lib/api'
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
const siteUrl = 'https://hiroy.club';
  const posts = await getAllPostsWithSlugAndDate();
  const fields = posts.edges.map( ({node}) => {
      return {
        loc: `${siteUrl}/${node.slug}`,
        lastmod: new Date(node.date).toISOString(),

      };
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function SiteMap() {}