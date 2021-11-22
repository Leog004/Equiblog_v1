// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function contact(req, res) {

  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation createSubscriber($email: String!) {
      createSubscriber(data: {email: $email}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    email: req.body.email,
  });

  return res.status(200).send(result);

}
