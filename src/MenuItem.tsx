import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownItemProps } from 'react-bootstrap/DropdownItem';
import {SyntheticEvent} from "react";

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

export const MenuItem: React.FC<Props> = (props: Props) => {

  const onSelect = (event: SyntheticEvent<HTMLElement, Event>) => {
    if (typeof props.onSelect === 'function') {
      props.onSelect(event);
    }
  };

  return (
      <Dropdown.Item
        id={props.id}
        href={props.href}
        title={props.title}
        className={props.className}
        onSelect={onSelect}
        active={props.active}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </Dropdown.Item>
    );

}
