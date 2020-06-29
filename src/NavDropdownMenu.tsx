import * as React from 'react';

import { NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

type CallbackFunction = (b: boolean) => void;

interface Props {
  className?: string;
  title?: string;
  id: string;
  bg?: string;
  disabled?: boolean;
  active?: boolean;
  menuRole?: string;
  renderMenuOnMount?: boolean;
  rootCloseEvent?: 'click' | 'mousedown';
  bsPrefix?: string;

  alignRight?: boolean;
  drop?: 'up' | 'left' | 'right' | 'down';
  show?: boolean;
  flip?: boolean;
  onToggle?: (
    isOpen: boolean,
    event: React.SyntheticEvent<Dropdown>,
    metadata: { source: 'select' | 'click' | 'rootClose' | 'keydown' }
  ) => void;
  focusFirstItemOnShow?: boolean | 'keyboard';
}

export class NavDropdownMenu extends React.Component<Props> {
  private refElement: NavDropdown | null = null;
  render() {
    return (
      <NavDropdown
        className={this.props.className}
        ref={(ref) => (this.refElement = ref)}
        title={this.props.title}
        id={this.props.id}
        onToggle={this.onToggle}
        alignRight={this.props.alignRight}
        bg={this.props.bg}
        disabled={this.props.disabled}
        active={this.props.active}
        menuRole={this.props.menuRole}
        renderMenuOnMount={this.props.renderMenuOnMount}
        rootCloseEvent={this.props.rootCloseEvent}
        bsPrefix={this.props.bsPrefix}
        drop={this.props.drop}
        show={this.props.show}
        flip={this.props.flip}
        focusFirstItemOnShow={this.props.focusFirstItemOnShow}
      >
        {this.props.children}
      </NavDropdown>
    );
  }

  private onToggle = (
    show: boolean,
    event: React.SyntheticEvent<Dropdown>,
    metadata: { source: 'select' | 'click' | 'rootClose' | 'keydown' }
  ) => {
    if (this.refElement) {
      if (show === false) {
        const element = this.refElement as any;
        if (element) {
          const children = element.querySelectorAll('.dropdown-menu.show');
          for (const child of children) {
            child.classList.remove('show');
          }
        }
      }
    }
    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(show, event, metadata);
    }
  };
}
