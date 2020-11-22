import React from 'react';
import { FC, useState } from 'react';
import { PrimaryButton, gray5, gray6 } from './Styles';

export interface Values {
  [key: string]: any;
}

interface Props {
  submitCaption?: string;
}

export const Form: FC<Props> = ({ submitCaption, children }) => {
  const [values, setValues] = useState<Values>({});
  return (
    <form noValidate={true}>
      <fieldset
        
      >
        {children}
        <div>
          <PrimaryButton type="submit">
            {submitCaption}
          </PrimaryButton>
        </div>
      </fieldset>
    </form>
  );
};