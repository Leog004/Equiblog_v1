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
        blogs(first: 3, where: {isActive: true, headerFeature: true}) {
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
          backgroundImage{
            url
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


  export const getBlogs = async () => {
    const query = gql`
      query MyQuery {
        blogs(where: {isActive: true}) {
          author
          content
          size
          isActive
          isFeatured
          slug
          title
          id
          blogImage {
            url
          }
          brand {
            brandName
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);
  
    return result.blogs;

  }


  export const getBlogsSlug = async () => {
    
    const query = gql`
    
      query MyQuery {
        blogsConnection {
          edges {
            node {
              author
              content
              isActive
              slug
              title
              blogContent {
                raw
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);
    return result.blogsConnection.edges;

  } 



  export const getblogDetails = async (slug) => {
    const query = gql`
      query getblogDetails($slug : String!) {
        blog(where: {slug: $slug}) {
          title
          content
          createdAt
          slug
          blogContent {
            raw
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.blog;
  };


  export const submitComment = async (obj) => {
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  };


  export const getBlogFeatures = async () => {

    const query = gql`
 
      query blogFeatures {
        blogs(where: {isActive: true, isFeatured: true}, first: 4) {
          blogImage {
            url
          }
          content
          title
          slug
        }
      }
    `;


    const result = await request(graphqlAPI, query);
    return result.blogs;

  }

  export const getNewBlogs = async () => {

    const query = gql`
      query newBlogs {
        blogs(orderBy: createdAt_DESC, where: {isActive: true}, first: 4) {
          author
          content
          brand {
            brandName
          }
          id
          isActive
          title
          slug
        }
    }

    `;

    const result = await request(graphqlAPI, query);
    return result.blogs;

  }



  export const submitMessage = async (obj) => {
    const result = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  };