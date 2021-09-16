import { useState } from 'react';

export type StrapiPost = {
  id?: string;
  title: string;
  content: string;
};

export type FormPostProps = {
  onSave?: (post: StrapiPost) => Promisse<void>;
  post?: StrapiPost;
};

export const FormPost = ({ post }: FormPostProps) => {
  const { title = '', content = '', id = '' } = post;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setContent] = useState(content);

  return (
    <form>
      <input type="hidden" name="post-id" value={id} />
    </form>
  );
};
