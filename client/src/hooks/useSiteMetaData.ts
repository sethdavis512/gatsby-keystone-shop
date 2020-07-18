import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
    const data = useStaticQuery(graphql`
        query SiteData {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        label
                        url
                    }
                }
            }
        }
    `)

    const { menuLinks, title } = data.site.siteMetadata

    return {
        menuLinks,
        title
    }
}
