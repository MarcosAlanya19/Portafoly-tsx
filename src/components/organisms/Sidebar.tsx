import { Link } from 'react-router-dom';
import { config } from '../../config';
import { MenuSidebar } from '../molecules';
import { Footer } from './Footer';
import { FC } from 'react';

interface Props {
  classname: string;
  onClick: () => void;
}

export const Sidebar: FC<Props> = ({ classname, onClick }) => {
  return (
    <div
      className={`${classname} fixed top-0 w-full md:w-60 lg:w-80 h-full border bg-white transition-all z-40`}
    >
      <div className='grid md:mx-5'>
        <Link
          to={config.ROUTES.INDEX}
          className='block text-center w-full my-20 font-black text-[2.125rem]'
        >
          MARCOS
        </Link>
        <MenuSidebar onClick={onClick} />
        <Footer />
      </div>
    </div>
  );
};
