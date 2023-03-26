import { SocialNetworks } from '../molecules';

export const Footer = () => {
  const date = new Date();

  return (
    <div className='w-full py-2 px-8 z-40'>
      <div className='divide-y'>
        <div className='py-8 flex justify-center items-center'>
          <SocialNetworks classname='flex gap-9' />
        </div>
        <div className='flex items-center text-center justify-center py-8 text-gray-500'>
          <p>
            &copy; {date.getFullYear()}
            <span className='font-bold'> MarcosAlanya</span> Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
