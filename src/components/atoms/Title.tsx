import { FC } from 'react';

interface Props {
  text: string;
  classname?: string;
}

export const Title: FC<Props> = ({ text, classname }) => {
  return <h1 className={`${classname} font-bold text-[3.125rem]`}>{text}</h1>;
};
