import * as React from 'react';
import { useRef, forwardRef } from "react";
import { DropdownProps } from 'react-bootstrap/Dropdown';

interface Props extends Omit<DropdownProps, 'title'> {
    id?: string;
    className?: string;
    href?: string;
    title?: React.ReactNode; // Re-defining title as ReactNode to support icons/elements
}

export const DropdownSubmenu = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const refSubMenuContent = useRef<HTMLDivElement | null>(null);

    let className = 'dropdown-submenu-container';
    className = props.className
        ? className + ' ' + props.className
        : className;

    const hideChildren = (parent: any) => {
        const children = parent.querySelectorAll('.dropdown-menu.show');
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('show');
        }
    };

    const getParents = (elem: any, selector: string) => {
        const nodes = [];
        let element = elem;
        nodes.push(element);
        while (element && element.parentNode) {
            if (
                typeof element.parentNode.matches === 'function' &&
                element.parentNode.matches(selector)
            ) {
                nodes.push(element.parentNode);
            }
            element = element.parentNode;
        }
        return nodes;
    };

    const hideSiblings = () => {
        if (refSubMenuContent.current) {
            const parents = getParents(
                refSubMenuContent.current,
                '.dropdown-menu.show'
            );
            if (parents.length > 1) {
                hideChildren(parents[1]);
            }
        }
    };

    const onClick = (event: React.SyntheticEvent<any>) => {
        event.preventDefault();
        event.stopPropagation();

        if (refSubMenuContent.current) {
            let show = false;
            if (refSubMenuContent.current.classList.contains('show')) {
                hideChildren(refSubMenuContent.current);
            } else {
                show = true;
                hideSiblings();
            }
            refSubMenuContent.current.classList.toggle('show');
            if (typeof props.onToggle === 'function') {
                props.onToggle(show, { source: 'select', originalEvent: event });
            }
        }
    };

    return (
        <div className={className} id={props.id} ref={ref}>
            <a
                href={props.href || "#!"}
                className="dropdown-item dropdown-submenu dropdown-toggle"
                onClick={onClick}
            >
                {props.title}
            </a>
            <div
                className="dropdown-menu"
                ref={refSubMenuContent}
            >
                {props.children}
            </div>
        </div>
    );
});

DropdownSubmenu.displayName = 'DropdownSubmenu';
