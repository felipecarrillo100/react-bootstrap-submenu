import * as React from 'react';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
import { SyntheticEvent } from "react";
interface Props extends DropdownItemProps {
    id?: string;
    href?: string;
    title?: string;
    divider?: boolean;
    className?: string;
    onSelect?: (event: SyntheticEvent<HTMLElement, Event>) => void;
    active?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<any>;
}
export declare const MenuItem: React.FC<Props>;
export {};
