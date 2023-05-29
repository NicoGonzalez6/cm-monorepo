import React from 'react';
import classnames from 'classnames';
import { Spinner } from '../spinner';

type CmButtonType = 'default' | 'error' | 'success' | 'disabled';
type CmButtonSize = 'sm' | 'md' | 'lg' | 'full';

interface CmButtonProps {
  children?: string | number | React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  btnType?: CmButtonType;
  btnSize?: CmButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const CmButton: React.FC<CmButtonProps> = ({
  children,
  onClick,
  btnType = 'default',
  btnSize = 'md',
  isDisabled = false,
  isLoading = false,
}) => {
  const getButtonType = (type: CmButtonType): string => {
    switch (type) {
      case 'default':
        return 'cm-bg-primary-500 hover:cm-bg-primary-600';
      case 'disabled':
        return 'cm-bg-softDisabled';
      case 'error':
        return 'cm-bg-error hover:cm-brightness-90';
      case 'success':
        return 'cm-bg-success hover:cm-brightness-90';
    }
  };

  const getButtonSize = (size: CmButtonSize): string => {
    switch (size) {
      case 'sm':
        return 'cm-min-w-[120px]';
      case 'md':
        return 'cm-min-w-[180px]';
      case 'lg':
        return 'cm-min-w-[200px]';
      case 'full':
        return 'cm-min-w-full';
    }
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
        `cm-min-w-[150px] cm-cursor-pointer cm-h-[40px] cm-shadow-md cm-flex cm-justify-center cm-items-center cm-rounded-md cm-transition-all cm-duration-200 cm-px-2`,
        `${getButtonType(btnType)}`,
        `${getButtonSize(btnSize)}`,
      )}
      onClick={onClickHandler}
    >
      {isLoading ? (
        <Spinner spinnerSize="sm" />
      ) : (
        <p className={classnames(`${btnType === 'disabled' ? 'cm-text-disabled' : 'cm-text-white'}`, 'cm-font-medium')}>
          {children}
        </p>
      )}
    </div>
  );
};
