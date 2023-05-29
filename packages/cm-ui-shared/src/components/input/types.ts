export interface CmInputProps {
  value: string;
  label?: string;
  name?: string;
  id?: string;
  onChange?: () => void;
  isError?: boolean;
  errorMsg?: string;
}
