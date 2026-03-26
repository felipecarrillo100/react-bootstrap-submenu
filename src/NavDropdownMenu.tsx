import * as React from 'react';
import { useRef, forwardRef } from "react";
import { NavDropdown, NavDropdownProps } from 'react-bootstrap';
import { DropdownMenuVariant } from "react-bootstrap/DropdownMenu";

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

export const NavDropdownMenu = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const divEl = useRef<HTMLDivElement | null>(null);

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
                const children = element.querySelectorAll('.dropdown-menu.show');
                // Standard for-loop for maximum backward compatibility
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.remove('show');
                }
            }
        }
        if (typeof props.onToggle === 'function') {
            props.onToggle(show, meta);
        }
    };

    return (
        <NavDropdown
            // Merging your internal ref with the forwarded ref
            ref={(node: any) => {
                divEl.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as any).current = node;
            }}
            className={props.className}
            title={props.title}
            id={props.id}
            onToggle={onToggle as any}
            align={props.alignRight ? "end" : props.align}
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
});

NavDropdownMenu.displayName = 'NavDropdownMenu';
