import { FC } from 'react';
import { IconType, JSXElement } from '../../types';
import { Icon } from './Icon';

interface Props {
  children?: JSXElement;
  classname?: string;
  icon?: IconType;
  onClick?: () => void;
  text?: string;
  type: 'button' | 'submit';
  variant?: 'black';
}

export const Button: FC<Props> = ({
  children,
  classname,
  icon,
  onClick,
  text,
  type,
  variant,
}) => {
  const classDefault =
    'uppercase font-semibold tracking-widest leading-none overflow-hidden';
  const black =
    'text-white uppercase px-8 py-4 bg-black text-center font-bold transition-colors hover:bg-transparent text-[1rem] border-2 border-black hover:text-black';

  return (
    <button
      className={`${classDefault} ${classname} ${variant === 'black' && black}`}
      onClick={onClick}
      type={type}
    >
      {icon && <Icon type={icon} />}
      {text}
      {children}
    </button>
  );
};
