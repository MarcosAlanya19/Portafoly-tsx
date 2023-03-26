import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { config } from '../../config';
import { IconType } from '../../types';
import { LinkSidebar } from '../atoms';

interface Props {
  onClick?: () => void;
}

export const MenuSidebar: FC<Props> = ({ onClick }) => {
  return (
    <div className='grid divide-y'>
      <LinkPage onClick={onClick} to={config.ROUTES.ABOUT_ME} text='Acerca de mí' />
      <LinkPage onClick={onClick} to={config.ROUTES.SKILLS} text='Habilidades' />
      <LinkPage onClick={onClick} to={config.ROUTES.EDUCATION} text='Educación' />
      <LinkPage onClick={onClick} to={config.ROUTES.EMPLOYEMENT} text='Empleo' />
      <LinkPage onClick={onClick} to={config.ROUTES.PORTAFOLY} text='Portafolio' />
      <LinkPage onClick={onClick} to={config.ROUTES.CONTACT} text='Contacto' />
    </div>
  );
};

interface Link {
  onClick?: () => void;
  text: string;
  to: string;
}

function LinkPage({ onClick, to, text }: Link) {
  const location = useLocation();

  return (
    <LinkSidebar
      classname={`${location.pathname === to && 'bg-[#FFD900]'}`}
      icon={IconType.Code}
      onClick={onClick}
      text={text}
      to={`${to}`}
    />
  );
}
