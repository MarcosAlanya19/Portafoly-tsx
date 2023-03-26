import { Text } from '../atoms';

export const MyData = () => {
  return (
    <div className='divide-y-2 my-8'>
      <Text classname='py-3' level='p' text='Nombre: Marcos Alanya Pacheco' />
      <Text classname='py-3' level='p' text='Email: marcosalanya19@gmail.com' />
      <Text classname='py-3' level='p' text='Celular: +51 934 737 663' />
      <Text classname='py-3' level='p' text='Nacimiento: 12 febrero del 2001' />
      <Text classname='py-3' level='p' text='Nacionalidad: Perú' />
    </div>
  );
};
