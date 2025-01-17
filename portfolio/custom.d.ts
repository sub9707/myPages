// svg 파일 React 컴포넌트로 import 하려고 추가함..!
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}