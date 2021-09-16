import { Session } from 'next-auth';
import { GetServerSidePropsContext } from 'next';

export const privateServerSideProps = async (ctx: GetServerSidePropsContext, callbackFn?: (session: Session)) => {

}
