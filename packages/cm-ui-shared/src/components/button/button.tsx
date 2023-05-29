import React from 'react';
import classnames from 'classnames';
import { CmSpinner } from '../spinner';
import { CmButtonProps } from './types';

export const CmButton: React.FC<CmButtonProps> = ({
  children,
  onClick,
  btnType = 'default',
  btnSize = 'md',
  isDisabled = false,
  isLoading = false,
}) => {
  const buttonTheme = {
    defaultStyles: `cm-min-w-[150px] cm-cursor-pointer cm-h-[40px] cm-shadow-md cm-flex cm-justify-center cm-items-center cm-rounded-md cm-transition-all cm-duration-200 cm-px-2`,
    buttonType: {
      default: 'cm-bg-primary-500 hover:cm-bg-primary-600',
      disabled: 'cm-bg-softDisabled',
      error: 'cm-bg-error hover:cm-brightness-90',
      success: 'cm-bg-success hover:cm-brightness-90',
    },
    buttonSize: {
      sm: 'cm-min-w-[120px]',
      md: 'cm-min-w-[180px]',
      lg: 'cm-min-w-[200px]',
      full: 'cm-min-w-full',
    },
  };

  const onClickHandler = (): void => {
    if (isDisabled || isLoading) {
      return;
    }
    onClick && onClick();
  };

  return (
    <div
      className={classnames(
        buttonTheme.defaultStyles,
        `${buttonTheme.buttonType[btnType]}`,
        `${buttonTheme.buttonSize[btnSize]}`,
      )}
      onClick={onClickHandler}
    >
      {isLoading ? (
        <CmSpinner spinnerSize="sm" />
      ) : (
        <p className={classnames(`${btnType === 'disabled' ? 'cm-text-disabled' : 'cm-text-white'}`, 'cm-font-medium')}>
          {children}
        </p>
      )}
    </div>
  );
};
