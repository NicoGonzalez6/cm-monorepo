type CmButtonType = 'default' | 'error' | 'success' | 'disabled';
type CmButtonSize = 'sm' | 'md' | 'lg' | 'full';

export interface CmButtonProps {
  children?: string | number | React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  btnType?: CmButtonType;
  btnSize?: CmButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
}
