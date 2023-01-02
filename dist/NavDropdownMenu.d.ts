import * as React from 'react';
import { NavDropdownProps } from 'react-bootstrap';
import { DropdownMenuVariant } from "react-bootstrap/DropdownMenu";
interface Props extends NavDropdownProps {
    title: string;
    id?: string | undefined;
    alignRight?: boolean;
    disabled?: boolean;
    active?: boolean;
    menuRole?: string;
    renderMenuOnMount?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
    menuVariant?: DropdownMenuVariant;
    bsPrefix?: string;
}
export declare const NavDropdownMenu: React.FC<Props>;
export {};
