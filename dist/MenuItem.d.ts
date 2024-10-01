import * as React from 'react';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
interface Props extends DropdownItemProps {
    id?: string;
    href?: string;
    title?: string;
    divider?: boolean;
    className?: string;
    onSelectV2?: (eventKey: string | number | undefined, event: React.MouseEvent<HTMLElement, any>) => void;
    active?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const MenuItem: React.FC<Props>;
export {};
