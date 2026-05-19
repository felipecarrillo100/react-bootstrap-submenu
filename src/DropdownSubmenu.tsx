import * as React from 'react';
import { useRef, forwardRef } from 'react';
import { DropdownProps } from 'react-bootstrap/Dropdown';

export interface DropdownSubmenuProps extends Omit<DropdownProps, 'title'> {
    id?: string;
    className?: string;
    href?: string;
    title?: React.ReactNode;
}

export const DropdownSubmenu = forwardRef<HTMLDivElement, DropdownSubmenuProps>((props, ref) => {
    const {
        id,
        className: propClassName,
        href,
        title,
        children,
        onToggle,
        onSelect,
        drop,
        show,
        align,
        focusFirstItemOnShow,
        navbar,
        ...rest
    } = props;

    const refSubMenuContent = useRef<HTMLDivElement | null>(null);

    let className = 'dropdown-submenu-container';
    if (propClassName) {
        className += ' ' + propClassName;
    }

    const hideChildren = (parent: HTMLElement) => {
        const activeSubmenus = parent.querySelectorAll('.dropdown-menu.show');
        activeSubmenus.forEach((child) => {
            child.classList.remove('show');
        });
    };

    const getParents = (elem: HTMLElement, selector: string) => {
        const nodes = [];
        let element: HTMLElement | null = elem;
        nodes.push(element);
        while (element && element.parentNode) {
            const parent = element.parentNode as HTMLElement;
            if (
                parent &&
                typeof parent.matches === 'function' &&
                parent.matches(selector)
            ) {
                nodes.push(parent);
            }
            element = parent;
        }
        return nodes;
    };

    const hideSiblings = () => {
        if (refSubMenuContent.current) {
            const parents = getParents(
                refSubMenuContent.current,
                '.dropdown-menu'
            );
            if (parents[1]) {
                hideChildren(parents[1]);
            }
        }
    };

    const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (refSubMenuContent.current) {
            let show = false;
            if (refSubMenuContent.current.classList.contains('show')) {
                hideChildren(refSubMenuContent.current);
                refSubMenuContent.current.classList.remove('show');
            } else {
                show = true;
                hideSiblings();
                refSubMenuContent.current.classList.add('show');
            }
            if (typeof onToggle === 'function') {
                onToggle(show, { source: 'select', originalEvent: event as any });
            }
        }
    };

    return (
        <div {...rest} className={className} id={id} ref={ref}>
            <a
                href={href || '#!'}
                className="dropdown-item dropdown-submenu dropdown-toggle"
                onClick={onClick}
            >
                {title}
            </a>
            <div
                className="dropdown-menu"
                ref={refSubMenuContent}
            >
                {children}
            </div>
        </div>
    );
});

DropdownSubmenu.displayName = 'DropdownSubmenu';
