import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '../components/atoms';
import { Layout } from '../components/templates';
import { IconType } from '../types';

export const Page = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className='relative h-screen'>
      <Layout
        classname={`${active ? '-left-full md:left-0' : 'left-0'}`}
        onClick={() => setActive(!active)}
      />
      <Outlet />
      <Button
        classname='bg-white border shadow-md border-black rounded-full p-3 bottom-6 md:invisible right-6 z-50 cursor-pointer fixed'
        icon={active ? IconType.Active : IconType.Close}
        onClick={() => setActive(!active)}
        type='button'
      />
    </div>
  );
};
