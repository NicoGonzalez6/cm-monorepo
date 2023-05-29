import { CmInputProps } from './types';

const CmInputTheme = (isError?: boolean) => {
  return {
    defaultStyles: {
      input: `cm-peer cm-bg-white cm-border-[1px] ${
        isError ? 'cm-border-error' : 'cm-border-softDisabled'
      } cm-text-baseColor cm-rounded-md cm-pl-3 cm-pt-3 cm-pb-1 cm-outline-none cm-text-sm focus:cm-border-primary-500`,
      label: `cm-pointer-events-none cm-absolute cm-transition-all cm-duration-75 cm-text-softDisabled cm-text-xs peer-placeholder-shown:cm-text-sm  peer-placeholder-shown:cm-top-[14px] cm-top-[1px] cm-bg-transparent cm-left-3 peer-focus:cm-top-[1px] peer-focus:cm-text-xs peer-focus:cm-text-primary-500`,
    },
  };
};

export const CmInput: React.FC<CmInputProps> = ({ value, id, label, name, onChange, isError = false, errorMsg }) => {
  return (
    <div className="cm-flex cm-flex-col cm-relative">
      <input
        className={CmInputTheme(isError).defaultStyles.input}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        placeholder=" "
      />
      <label htmlFor="name" id="name" className={CmInputTheme().defaultStyles.label}>
        {label}
      </label>
      {isError && <p className="cm-text-sm cm-text-error cm-pt-[4px]">{errorMsg}</p>}
    </div>
  );
};
