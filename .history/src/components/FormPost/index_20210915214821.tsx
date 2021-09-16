import { useState } from 'react';
import { Button } from '../Button';
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

export const FormPost = ({ post, onSave }: FormPostProps) => {
  const { title = '', content = '', id = '' } = post || {};
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newPost = { id, title: newTitle, content: newContent };

    if (onSave) {
      onSave(newPost);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit">Salvar</Button>
    </form>
  );
};
