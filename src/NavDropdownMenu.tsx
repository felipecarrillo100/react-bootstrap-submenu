import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { NavDropdown, NavDropdownProps } from 'react-bootstrap';

export interface NavDropdownMenuProps extends Omit<NavDropdownProps, 'title'> {
    title: React.ReactNode;
    alignRight?: boolean;
}

export const NavDropdownMenu = forwardRef<HTMLDivElement, NavDropdownMenuProps>((props, ref) => {
    const {
        title,
        alignRight,
        onToggle,
        children,
        ...rest
    } = props;

    const divEl = useRef<HTMLDivElement | null>(null);

    const handleToggle = (
        show: boolean,
        meta: {
            source: string | undefined;
            originalEvent: any | undefined;
        }
    ) => {
        if (divEl.current && show === false) {
            const activeElements = divEl.current.querySelectorAll('.dropdown-menu.show');
            activeElements.forEach((el) => {
                el.classList.remove('show');
            });
        }

        if (typeof onToggle === 'function') {
            onToggle(show, meta);
        }
    };

    return (
        <NavDropdown
            {...rest}
            ref={(node: any) => {
                divEl.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as any).current = node;
            }}
            title={title}
            onToggle={handleToggle as any}
            align={alignRight ? 'end' : props.align}
        >
            {children}
        </NavDropdown>
    );
});

NavDropdownMenu.displayName = 'NavDropdownMenu';
