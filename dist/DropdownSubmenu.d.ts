import * as React from 'react';
import { DropdownProps } from 'react-bootstrap/Dropdown';
interface Props extends DropdownProps {
    id?: string;
    className?: string;
    href?: string;
}
export declare const DropdownSubmenu: React.FC<Props>;
export {};
