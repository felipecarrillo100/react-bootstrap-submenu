import * as React from 'react';
import { SelectCallback } from 'react-bootstrap/helpers';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
interface Props extends DropdownItemProps {
    href?: string;
    eventKey?: any;
    title?: string;
    divider?: boolean;
    className?: string;
    onSelect?: SelectCallback;
    active?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<this>;
}
export declare class MenuItem extends React.Component<Props> {
    private eventKey;
    constructor(props: Props);
    render(): JSX.Element;
    private onSelect;
}
export {};
