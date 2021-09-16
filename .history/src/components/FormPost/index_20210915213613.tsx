import { useState } from 'react';
import { TextInput } from '../TextInput';

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
  const { title = '', content = '', id = '' } = post || {};
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  return (
    <form>
      <TextInput
        name="post-title"
        label="Post title"
        value={newTitle}
        onInputChange={(v) => setNewTitle(v)}
      />
      <TextInput
        name="post-content"
        label="Post Content"
        value={newContent}
        onInputChange={(v) => setNewContent(v)}
        as="textarea"
      />
    </form>
  );
};
