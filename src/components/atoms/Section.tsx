import { FC } from 'react';
import { JSXElement } from '../../types';

interface Props {
  children: JSXElement;
  classname?: string;
}

export const Section: FC<Props> = ({ children, classname }) => {
  return (
    <section
      className={`${classname} w-full md:pl-[15rem] py-14 lg:py-36 px-8 z-40`}
    >
      {children}
    </section>
  );
};
