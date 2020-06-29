import * as React from 'react';
import '../src/index.css';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
  className?: string;
  href?: string;
  title: string | JSX.Element;
  onClick?: React.MouseEventHandler<this>;
  onToggle?: (
    isOpen: boolean,
    event: React.SyntheticEvent<Dropdown>,
    metadata: { source: 'select' | 'click' | 'rootClose' | 'keydown' }
  ) => void;
}

export class DropdownSubmenu extends React.Component<Props> {
  private refSubMenuContent: HTMLDivElement | null = null;

  render() {
    let className = 'dropdown-submenu-container';
    className = this.props.className
      ? +className + ' ' + this.props.className
      : className;
    return (
      <div className={className}>
        <a
          href={this.props.href}
          className="dropdown-item dropdown-submenu dropdown-toggle"
          onClick={this.onClick}
        >
          {this.props.title}
        </a>
        <div
          className="dropdown-menu"
          ref={(ref) => (this.refSubMenuContent = ref)}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  private onClick = (event: React.SyntheticEvent<any>) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.refSubMenuContent) {
      let show = false;
      if (this.refSubMenuContent.classList.contains('show')) {
        DropdownSubmenu.hideChildren(this.refSubMenuContent);
      } else {
        show = true;
        this.hideSibblings();
      }
      this.refSubMenuContent.classList.toggle('show');
      if (typeof this.props.onToggle === 'function') {
        this.props.onToggle(show, event, { source: 'select' });
      }
    }
  };

  private hideSibblings = () => {
    if (this.refSubMenuContent) {
      const parents = DropdownSubmenu.getParents(
        this.refSubMenuContent,
        '.dropdown-menu.show'
      );
      if (parents.length > 1) {
        DropdownSubmenu.hideChildren(parents[1]);
      }
    }
  };

  private static hideChildren(parent: any) {
    const children = parent.querySelectorAll('.dropdown-menu.show') as any;
    for (const child of children) {
      child.classList.remove('show');
    }
  }

  private static getParents(elem: any, selector: string) {
    const nodes = [];
    let element = elem;
    nodes.push(element);
    while (element.parentNode) {
      if (
        typeof element.parentNode.matches === 'function' &&
        element.parentNode.matches(selector)
      ) {
        nodes.push(element.parentNode);
      }
      element = element.parentNode;
    }
    return nodes;
  }
}
