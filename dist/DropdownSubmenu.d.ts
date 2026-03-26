import * as React from 'react';
import { DropdownProps } from 'react-bootstrap/Dropdown';
interface Props extends Omit<DropdownProps, 'title'> {
    id?: string;
    className?: string;
    href?: string;
    title?: React.ReactNode;
}
export declare const DropdownSubmenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
