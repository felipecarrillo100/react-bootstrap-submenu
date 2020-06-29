import * as React from 'react';
import '../src/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
interface Props {
    className?: string;
    href?: string;
    title: string | JSX.Element;
    onClick?: React.MouseEventHandler<this>;
    onToggle?: (isOpen: boolean, event: React.SyntheticEvent<Dropdown>, metadata: {
        source: 'select' | 'click' | 'rootClose' | 'keydown';
    }) => void;
}
export declare class DropdownSubmenu extends React.Component<Props> {
    private refSubMenuContent;
    render(): JSX.Element;
    private onClick;
    private hideSibblings;
    private static hideChildren;
    private static getParents;
}
export {};
