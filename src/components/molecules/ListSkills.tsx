import { IconType } from '../../types';
import { Icon, Text } from '../atoms';

export const ListSkills = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-32 gap-y-6 md:gap-y-8'>
      <InfoSkill
        setting='Front-End'
        text='Lenguaje de marcado de hipertexto, un sistema estandarizado para etiquetar archivos de texto para lograr efectos de fuente, color, gráfico e hipervínculo en las páginas de la World Wide Web.'
        title='HTML'
      />
      <InfoSkill
        setting='Front-End'
        text='CSS son las siglas en inglés de Cascading Style Sheets, que significa «hojas de esilo en cascada». Es un lenguaje que se usa para estilizar'
        title='CSS'
      />
      <InfoSkill
        setting='Front-End'
        text='Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código'
        title='TAILWIND'
      />
      <InfoSkill
        setting='Front-End'
        text='JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar y practicamente todo los demás.'
        title='JAVASRIPT'
      />
      <InfoSkill
        setting='Front-End'
        text='TypeScript es un lenguaje orientado a objetos (como el lenguaje R, por ejemplo). Esto quiere decir que tanto el cliente como el servidor tienen acceso a la escritura de código. Además, se trata de un código abierto.'
        title='TYPESCRIPT'
      />
      <InfoSkill
        setting='Front-End'
        text='React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.'
        title='REACT'
      />
      <InfoSkill
        setting='DataBase'
        text='PostgreSQL, o simplemente Postgres para darle un nombre más pintoresco, es un sistema de código abierto de administración de bases de datos del tipo relacional, aunque también es posible ejecutar consultas que sean no relaciones.'
        title='POSTGRESQL'
      />
      <InfoSkill
        setting='Back-End'
        text='Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript.'
        title='NODE'
      />
      <InfoSkill
        setting='Back-End'
        text='Express.js, a veces también llamado «Express», es un framework de backend Node.js minimalista, rápido y similar a Sinatra, que proporciona características y herramientas robustas para desarrollar aplicaciones de backend escalables.'
        title='EXPRESS'
      />
    </div>
  );
};

interface Info {
  setting: 'Front-End' | 'Back-End' | 'DataBase';
  text: string;
  title: string;
}

function InfoSkill({ text, title, setting }: Info) {
  return (
    <div className='flex gap-2'>
      <Icon classname='text-[3rem] text-gray-500' type={IconType.SkillCode} />
      <div>
        <Text classname='text-black uppercase' level='h3' text={title} />
        <Text level='p' text={text} />
        <h3>
          <b>Herramienta:</b> {setting}
        </h3>
      </div>
    </div>
  );
}
