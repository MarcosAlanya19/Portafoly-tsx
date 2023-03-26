import { Anchor, SectionPage, Text } from '../atoms';
import { MyData } from '../molecules';

export const AboutMe = () => {
  return (
    <SectionPage
      classname={`bg-[url('https://live.staticflickr.com/65535/52773203236_1f522ca931_h.jpg')] h-screen bg-cover lg:bg-right bg-no-repeat`}
      subtitle='ACERCA DE MÍ'
    >
      <div className='w-full md:w-96'>
        <Text
          level='h3'
          text='Hola, soy desarrollador FULLSTACK y CONTADOR TRIBUTARIO de Perú. Tengo una maestría en Diseño Web de la Universidad Mundial.'
        />
        <MyData />
        <Anchor
          download={true}
          href='./download/CV-Alanya.pdf'
          target={'_blank'}
          text='Descargar CV'
          variant='black'
        />
      </div>
    </SectionPage>
  );
};
