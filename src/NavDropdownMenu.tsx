import * as React from 'react';

import {NavDropdown, NavDropdownProps} from 'react-bootstrap';
import {DropdownMenuVariant} from "react-bootstrap/DropdownMenu";
import {useRef} from "react";

interface Props extends NavDropdownProps {
  title: string;
  id?: string | undefined;
  alignRight?: boolean;
  disabled?: boolean;
  active?: boolean;
  menuRole?: string;
  renderMenuOnMount?: boolean;
  rootCloseEvent?: 'click' | 'mousedown';
  menuVariant?: DropdownMenuVariant;
  bsPrefix?: string;
}

export const NavDropdownMenu: React.FC<Props> = (props:Props) => {
  let divEl = useRef(null as HTMLDivElement | null);

  const onToggle = (
      show: boolean,
      meta: {
        source: string | undefined;
        originalEvent: any | undefined;
      }
  ) => {
    if (divEl.current) {
      if (show === false) {
        const element = divEl.current;
        if (element) {
          const children  = element.querySelectorAll('.dropdown-menu.show');
          // @ts-ignore
          for (const child of children) {
            child.classList.remove('show');
          }
        }
      }
    }
    if (typeof props.onToggle === 'function') {
      props.onToggle(show,  meta);
    }
  };
  return (
      <NavDropdown
        ref={divEl}
        className={props.className}
        title={props.title}
        id={props.id}
        onToggle={onToggle as any}
        align={props.alignRight ? "end" : undefined}
        disabled={props.disabled}
        active={props.active}
        menuRole={props.menuRole}
        renderMenuOnMount={props.renderMenuOnMount}
        rootCloseEvent={props.rootCloseEvent}
        bsPrefix={props.bsPrefix}
        drop={props.drop}
        show={props.show}
        focusFirstItemOnShow={props.focusFirstItemOnShow}
      >
        {props.children}
      </NavDropdown>
    );
}
