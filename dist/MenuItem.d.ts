import * as React from 'react';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
interface Props extends DropdownItemProps {
    onSelectV2?: (eventKey: string | number | undefined, event: React.MouseEvent<HTMLElement, any>) => void;
}
export declare const MenuItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export {};
