import { SectionPage, Text } from '../atoms';

export const Employment = () => {
  return (
    <SectionPage
      classname="bg-[url('')] h-screen bg-cover bg-no-repeat bg-bottom"
      subtitle='Empleo'
    >
      <div className='flex flex-col lg:flex-row gap-y-7 lg:gap-y-0 gap-x-14'>
        <Job
          company='Agencia Creativa MDesing'
          date='2022 - 2023'
          description='Encargado de la maquetación del proyecto, asimismo el consumo del API-REST'
          position='Frontend Developer'
        />
        <Job
          company='Citrica'
          date='2020 - Presente'
          description='Encargado de los registros, pagos y asesoramiento recpeto a temas tributarios'
          position='Contador Freelance'
        />
        <Job
          company='Hard Discount'
          date='2020 - 2022'
          description='Encargado de una tienda Retail, respecto a la documentación y manejo de personal para un trabajo impecable en la educación'
          position='Administrador Retail'
        />
      </div>
    </SectionPage>
  );
};

interface Job {
  company: string;
  date: string;
  description: string;
  position: string;
}

function Job({ company, date, description, position }: Job) {
  return (
    <div>
      <div className='uppercase'>
        <Text classname='text-start' level='h3' text={company} />
        <Text classname='text-start' level='p' text={position} />
      </div>
      <div className='my-2 lg:my-4'>
        <Text variant='black' level='p' text={date} />
      </div>
      <Text level='p' text={description} />
    </div>
  );
}
