import { FC } from 'react';
import { JSXElement } from '../../types';
import { Section } from '../atoms';
import { SubTitle } from '../atoms/SubTitle';

interface Props {
  children: JSXElement;
  classname?: string;
  subtitle: string;
  variant?: 'beige';
}

export const SectionPage: FC<Props> = ({
  children,
  subtitle,
  classname,
  variant,
}) => {
  return (
    <Section classname={`${classname} ${variant === 'beige' && 'bg-[#F7F7F7]'}`}>
      <div className='mx-6 md:mx-10 lg:mx-52'>
        <SubTitle text={subtitle} />
        {children}
      </div>
    </Section>
  );
};
