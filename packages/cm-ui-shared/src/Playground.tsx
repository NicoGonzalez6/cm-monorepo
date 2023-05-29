import { CmInput } from './components';

export const Playground = () => {
  return (
    <div className="cm-w-screen cm-bg-darkerWhite cm-min-h-screen cm-flex cm-gap-5 cm-flex-col cm-justify-center cm-items-center">
      <div className="cm-w-[300px] cm-h-[300px] cm-flex cm-flex-col cm-justify-center  cm-gap-[30px]">
        <CmInput value="Floating filled" label="Floating filled" />
        <CmInput label="Floating filled" value="" isError />
      </div>
    </div>
  );
};
