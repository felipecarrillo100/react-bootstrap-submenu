import * as React from 'react';
import { forwardRef } from 'react';
import DropdownItem, { DropdownItemProps } from 'react-bootstrap/DropdownItem';

interface Props extends DropdownItemProps {
    onSelectV2?: (eventKey: string | number | undefined, event: React.MouseEvent<HTMLElement, any>) => void;
}

export const MenuItem = forwardRef<HTMLElement, Props>((props, ref) => {
    const { onSelectV2, onClick, eventKey, children, ...rest } = props;

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (onClick) onClick(event);
        if (onSelectV2) onSelectV2(eventKey, event);
    };

    return (
        <DropdownItem
            {...rest}
            ref={ref as any}
            eventKey={eventKey}
            onClick={handleClick}
        >
            {children}
        </DropdownItem>
    );
});

MenuItem.displayName = 'MenuItem';
