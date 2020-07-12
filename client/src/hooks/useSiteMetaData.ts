import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
    const data = useStaticQuery(graphql`
        query SiteData {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return {
        title
    }
}
