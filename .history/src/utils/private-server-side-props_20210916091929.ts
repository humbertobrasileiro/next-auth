import { Session } from 'next-auth';
import { GetServerSidePropsContext } from 'next';

export const privateServerSideProps = async <T>(
  ctx: GetServerSidePropsContext,
  callbackFn?: (session: Session) => Promise<T>,
) => {
  const session = await getSession(ctx);

  if (!session) {
    return serverSideRedirect(ctx);
  }

  try {
    const { id } = ctx.params;

    const { post } = await gqlClient.request(
      GQL_QUERY_GET_POST,
      {
        id,
      },
      {
        Authorization: `Bearer ${session.accessToken}`,
      },
    );

    return {
      props: {
        session,
        post,
      },
    };
  } catch (e) {
    return serverSideRedirect(ctx);
  }
};
