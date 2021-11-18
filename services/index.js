import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getBrands = async () => {
    const query = gql`
    query GetBrands {
        brands {
          brandName
          id
          isActive
          brandImage {
            size
            url
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.brands;
  };

  export const getHeaderFeatures = async () => {
      
    const query = gql`
    query GetHeaderFeatures {
        blogs(first: 3, where: {isActive: true, isFeatured: true, headerFeature: true}) {
          authorImage {
            id
            size
            url
          }
          blogContent {
            html
          }
          blogImage {
            id
            url
          }
          brand {
            isActive
            brandName
          }
          content
          isFeatured
          isActive
          slug
          title
        }
      }`;

    const result = await request(graphqlAPI, query);
  
    return result.blogs;

  }