import { FC } from 'react';
import {
  RiCloseLine,
  RiCodeBoxFill,
  RiDoubleQuotesL,
  RiFacebookFill,
  RiFilter3Line,
  RiGithubFill,
  RiLinkedinFill,
  RiTerminalLine,
} from 'react-icons/Ri';
import { IconType } from '../../types';

interface Props {
  classname?: string;
  type: IconType;
}

export const Icon: FC<Props> = ({ type, classname }) => {
  return (
    <div className={`${classname}`}>
      {type == IconType.Code && <RiTerminalLine />}
      {type == IconType.Facebook && <RiFacebookFill />}
      {type == IconType.GitHub && <RiGithubFill />}
      {type == IconType.Linkedin && <RiLinkedinFill />}
      {type == IconType.SkillCode && <RiCodeBoxFill />}
      {type == IconType.Quotes && <RiDoubleQuotesL />}
      {type == IconType.Active && <RiFilter3Line />}
      {type == IconType.Close && <RiCloseLine />}
    </div>
  );
};
