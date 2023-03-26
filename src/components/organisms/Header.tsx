import { Section, Text, Title } from '../atoms';

export const Header = () => {

  return (
    <Section
      classname={`bg-[url('https://live.staticflickr.com/65535/52773684358_e027c9ee04_k.jpg')] h-screen bg-cover bg-[75%] md:bg-right-top bg-no-repeat text-white flex flex-col justify-center items-start`}
    >
      <div className='mx-6 md:mx-10 lg:mx-52'>
        <Text level='h2' text='Hola, yo soy' classname='lg:leading-4 stroke' />
        <Title
          classname='lg:leading-normal leading-[3rem] stroke md:stroke-none'
          text='Marcos Alanya'
        />
        <div className='bg-black px-4 py-1 text-center uppercase'>
          FULL STACK DEVELOPER / Contador Tributario
        </div>
      </div>
    </Section>
  );
};
