import { Button, Input, SectionPage } from '../atoms';
import { TextArea } from '../atoms/TextArea';

export const Contact = () => {
  return (
    <SectionPage
      subtitle='Contacto'
      classname="bg-[url('')] bg-contain bg-no-repeat bg-right-bottom"
    >
      <div className='lg:w-3/6 grid gap-y-5'>
        <Input
          classname='uppercase border w-full p-4 text-[0.9375rem]'
          id='name'
          placeholder='* Tu nombre'
          type='text'
        />
        <Input
          classname='uppercase border w-full p-4 text-[0.9375rem]'
          id='email'
          placeholder='* Tu email'
          type='email'
        />
        <TextArea id='message' placeholder='*Tu mensaje' classname='uppercase' />
        <Button type='submit' variant='black' text='Enviar' />
      </div>
    </SectionPage>
  );
};
