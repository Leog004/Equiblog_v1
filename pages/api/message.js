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
    mutation createMessage($firstName: String!, $lastName: String!, $email: String!, $message: String!) {
      createMessage(data: {firstName: $firstName, lastName: $lastName, email: $email, message: $message}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    firstName : req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message
  });

  return res.status(200).send(result);

}
