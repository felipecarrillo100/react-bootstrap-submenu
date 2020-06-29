import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
interface Props {
    className?: string;
    title?: string;
    id: string;
    bg?: string;
    disabled?: boolean;
    active?: boolean;
    menuRole?: string;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
    bsPrefix?: string;
    alignRight?: boolean;
    drop?: 'up' | 'left' | 'right' | 'down';
    show?: boolean;
    flip?: boolean;
    onToggle?: (isOpen: boolean, event: React.SyntheticEvent<Dropdown>, metadata: {
        source: 'select' | 'click' | 'rootClose' | 'keydown';
    }) => void;
    focusFirstItemOnShow?: boolean | 'keyboard';
}
export declare class NavDropdownMenu extends React.Component<Props> {
    private refElement;
    render(): JSX.Element;
    private onToggle;
}
export {};
