import {LoaderWrapper, LoaderSpinner} from './styles';

export function Loader({children}: {children?: React.ReactNode}) {
  return (
    <LoaderWrapper>
      <LoaderSpinner />
      {children}
    </LoaderWrapper>
  );
}

export default Loader;
