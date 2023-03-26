import { FC } from 'react';

interface Props {
  classname?: string;
  id: string;
  placeholder?: string;
}

export const TextArea: FC<Props> = ({ classname, id, placeholder }) => {
  return (
    <textarea
      className={`${classname} border w-full p-4 text-[0.9375rem] resize-none`}
      id={id}
      name={id}
      placeholder={placeholder}
      rows={4}
    />
  );
};
