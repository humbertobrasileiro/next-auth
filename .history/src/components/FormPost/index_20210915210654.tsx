export type StrapiPost = {
  id?: string;
  title: string;
  content: string;
};

export const FormPost = () => {
  return (
    <form>
      <input type="hidden" name="post-id" value={id} />
    </form>
  );
};
