import { IconType } from '../../types';
import { Icon, SectionPage, Text, Title } from '../atoms';

export const Education = () => {
  return (
    <SectionPage
      classname={`bg-[url('https://live.staticflickr.com/65535/52772671087_735445f42a_h.jpg')] h-screen bg-cover bg-[57%] lg:bg-right bg-no-repeat`}
      subtitle='Educación'
    >
      <div className='lg:w-4/6'>
        <Text
          level='h3'
          text='La educación, un ambito donde aprender es lo primordial, tanto con ayuda y con esfuerzo de uno mismo'
        />
        <div className='grid md:grid-cols-2 gap-14 py-11 my-16 border-t border-b'>
          <Institution
            course='Desarrollo de sistemas'
            date='2022 - Actualidad'
            name='ILP PONTIFICIA'
            number='01'
          />
          <Institution
            course='Contabilidad y finanzas'
            date='2018 - 2021'
            name='IFB CERTUS'
            number='02'
          />
        </div>
        <div className='flex gap-10 md:w-4/6'>
          <Icon classname='text-[5rem]' type={IconType.Quotes} />
          <Text
            classname='uppercase font-normal'
            level='h3'
            text='LA EDUCACIÓN NO ES PREPARACIÓN PARA LA VIDA, LA EDUCACIÓN ES LA VIDA MISMA'
          />
        </div>
      </div>
    </SectionPage>
  );
};

interface Institution {
  course: string;
  date: string;
  name: string;
  number: string;
}

function Institution({ course, date, name, number }: Institution) {
  return (
    <div className='flex gap-10'>
      <Title text={number} />
      <div>
        <Text classname='uppercase text-gray-900' level='h3' text={name} />
        <Text classname='uppercase' level='h3' text={course} />
        <Text classname='uppercase' level='h3' text={date} />
      </div>
    </div>
  );
}
