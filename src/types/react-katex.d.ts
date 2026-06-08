declare module 'react-katex' {
  import * as React from 'react';

  interface KaTeXProps {
    math?: string;
    block?: boolean;
    children?: string;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => React.ReactNode;
  }

  export class BlockMath extends React.Component<KaTeXProps> {}
  export class InlineMath extends React.Component<KaTeXProps> {}
  export default BlockMath;
}
