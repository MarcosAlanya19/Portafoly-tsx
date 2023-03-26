import { FC } from 'react';
import { IconType } from '../../types';
import { Anchor, Icon } from '../atoms';

interface Props {
  classname?: string;
}

export const SocialNetworks: FC<Props> = ({ classname }) => {
  return (
    <div className={classname}>
      <Social
        icon={IconType.Facebook}
        to='https://www.facebook.com/Marcos.AlanyaPacheco19'
      />

      <Social icon={IconType.GitHub} to='https://github.com/MarcosAlanya19' />

      <Social
        icon={IconType.Linkedin}
        to='https://www.linkedin.com/in/marcosalanya19'
      />
    </div>
  );
};

interface Social {
  to: string;
  icon: IconType;
}

function Social({ icon, to }: Social) {
  return (
    <Anchor href={to} target='_blank'>
      <Icon classname='hover:text-gray-400 cursor-pointer' type={icon} />
    </Anchor>
  );
}
