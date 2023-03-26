import { FC } from 'react';
import { JSXElement } from '../../types';

interface Props {
  children?: JSXElement;
  classname?: string;
  download?: boolean;
  href: string;
  target?: '_self' | '_blank';
  text?: string;
  variant?: 'black';
}

export const Anchor: FC<Props> = ({
  href,
  download = false,
  target = '_self',
  variant,
  classname,
  text,
  children,
}) => {
  const black =
    'text-white uppercase px-8 py-4 bg-black text-center font-bold transition-colors hover:bg-transparent text-[1rem] border-2 border-black hover:text-black';

  return (
    <a
      className={`${classname} ${variant === 'black' && black}`}
      download={download}
      href={href}
      target={target}
    >
      {text}
      {children}
    </a>
  );
};
