import { SectionPage } from '../atoms';

export const Portafoly = () => {
  return (
    <SectionPage subtitle='Portafolio'>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 hover:bg-center'>
        <Image />
        <Image />
        <Image />
      </div>
    </SectionPage>
  );
};

function Image() {
  return (
    <div className='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
      <img
        src='https://tecdn.b-cdn.net/img/new/fluid/city/113.webp'
        className='absolute z-40 max-w-xs transition duration-300 ease-in-out hover:scale-110'
        alt='Louvre'
      />
      <div className='absolute z-50'>
        <h1>Titulo</h1>
        <h2>Link</h2>
      </div>
    </div>
  );
}
