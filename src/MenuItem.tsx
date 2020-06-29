import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
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

export class MenuItem extends React.Component<Props> {
  private eventKey: string;
  constructor(props: Props) {
    super(props);
    this.eventKey = this.props.eventKey;
  }
  render() {
    return (
      <Dropdown.Item
        href={this.props.href}
        title={this.props.title}
        className={this.props.className}
        onSelect={this.onSelect}
        active={this.props.active}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Dropdown.Item>
    );
  }

  private onSelect = (
    eventKey: string,
    event: React.SyntheticEvent<unknown>
  ) => {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(this.props.eventKey, event);
    }
  };
}
