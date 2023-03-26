import { FC } from 'react';

interface Props {
  classname?: string;
  level: 'h2' | 'h3' | 'p';
  text: string;
  variant?: 'black';
}

export const Text: FC<Props> = ({ text, classname, level, variant }) => {
  const black = 'text-white uppercase px-2 py-1 bg-black text-center inline-block';

  return (
    <div className={`${variant === 'black' && black}`}>
      {level === 'h2' && <h2 className={`${classname} text-[2.3125rem]`}>{text}</h2>}
      {level === 'h3' && (
        <h3
          className={`${classname} text-[0.9375rem] font-semibold text-gray-500 text-justify`}
        >
          {text}
        </h3>
      )}
      {level === 'p' && (
        <p className={`${classname} text-justify text-[0.8125rem]`}>{text}</p>
      )}
    </div>
  );
};
