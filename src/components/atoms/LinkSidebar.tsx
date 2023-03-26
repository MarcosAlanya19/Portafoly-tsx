import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconType } from '../../types';
import { Icon } from './Icon';

interface Props {
  classname?: string;
  icon: IconType;
  onClick?: () => void;
  text: string;
  to: string;
}

export const LinkSidebar: FC<Props> = ({ icon, text, classname, to, onClick }) => {
  const classDefault =
    'btnSidebar py-6 uppercase font-semibold text-[0.75rem] px-10 relative tracking-widest leading-none overflow-hidden';

  return (
    <Link to={to}>
      <button className={`w-full ${classname} ${classDefault}`} onClick={onClick}>
        <span className='absolute inset-0 bg-[#FFD900]'></span>
        <span className='absolute inset-0 flex justify-center items-center'>
          {icon && (
            <Icon classname='absolute inset-0 flex ml-5 items-center' type={icon} />
          )}
          {text}
        </span>
      </button>
    </Link>
  );
};
