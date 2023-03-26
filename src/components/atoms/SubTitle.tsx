import { FC } from 'react';
import { Icon } from '.';
import { IconType } from '../../types';

interface Props {
  classname?: string;
  text: string;
}

export const SubTitle: FC<Props> = ({ text, classname }) => {
  return (
    <h2
      className={`${classname} text-[2rem] md:text-[2.3125rem] font-bold mb-12 flex items-center gap-2`}
    >
      {<Icon type={IconType.Code} />}
      {text}
    </h2>
  );
};
