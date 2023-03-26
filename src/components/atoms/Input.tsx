import { FC } from 'react';

interface Props {
  classname?: string;
  id: string;
  placeholder: string;
  text?: string;
  type: 'text' | 'file' | 'submit' | 'email';
  variant?: string;
}

export const Input: FC<Props> = ({
  classname,
  id,
  placeholder,
  text,
  type,
  variant,
}) => {
  const black =
    'text-white uppercase px-8 py-4 bg-black text-center font-bold transition-colors hover:bg-transparent text-[1rem] border-2 border-black hover:text-black';

  return (
    <input
      className={`${classname} ${variant === 'black' && black}`}
      id={id}
      placeholder={placeholder}
      type={type}
      value={text}
    />
  );
};
