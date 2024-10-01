import * as React from 'react';
import DropdownItem, { DropdownItemProps } from 'react-bootstrap/DropdownItem';

interface Props extends DropdownItemProps {
  id?: string;
  href?: string;
  title?: string;
  divider?: boolean;
  className?: string;
  onSelectV2?: (eventKey: string | number | undefined, event: React.MouseEvent<HTMLElement, any>) => void;
  active?: boolean;
  disabled?: boolean;
  onClick?:  ( event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const MenuItem: React.FC<Props> = (props: Props) => {

  const onSelect = (eventKey: string | number | undefined, event: React.MouseEvent<HTMLElement, any>) => {
    if (typeof props.onSelectV2 === 'function') {
      props.onSelectV2(eventKey, event);
    }
  };

  const onClick = ( event: React.MouseEvent<HTMLElement, any>) => {
    if (typeof props.onClick === 'function') {
      props.onClick(event);
    }
    onSelect(props.eventKey, event)
  };

  return (
      <DropdownItem
        id={props.id}
        href={props.href}
        title={props.title}
        className={props.className}
        active={props.active}
        disabled={props.disabled}
        onSelect={props.onSelect}
        onClick={onClick}
      >
        {props.children}
      </DropdownItem>
    );

}
