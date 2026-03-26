"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownSubmenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.DropdownSubmenu = (0, react_1.forwardRef)(function (props, ref) {
    var refSubMenuContent = (0, react_1.useRef)(null);
    var className = 'dropdown-submenu-container';
    className = props.className
        ? className + ' ' + props.className
        : className;
    var hideChildren = function (parent) {
        var children = parent.querySelectorAll('.dropdown-menu.show');
        for (var i = 0; i < children.length; i++) {
            children[i].classList.remove('show');
        }
    };
    var getParents = function (elem, selector) {
        var nodes = [];
        var element = elem;
        nodes.push(element);
        while (element && element.parentNode) {
            if (typeof element.parentNode.matches === 'function' &&
                element.parentNode.matches(selector)) {
                nodes.push(element.parentNode);
            }
            element = element.parentNode;
        }
        return nodes;
    };
    var hideSiblings = function () {
        if (refSubMenuContent.current) {
            var parents = getParents(refSubMenuContent.current, '.dropdown-menu.show');
            if (parents.length > 1) {
                hideChildren(parents[1]);
            }
        }
    };
    var onClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (refSubMenuContent.current) {
            var show = false;
            if (refSubMenuContent.current.classList.contains('show')) {
                hideChildren(refSubMenuContent.current);
            }
            else {
                show = true;
                hideSiblings();
            }
            refSubMenuContent.current.classList.toggle('show');
            if (typeof props.onToggle === 'function') {
                props.onToggle(show, { source: 'select', originalEvent: event });
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, id: props.id, ref: ref, children: [(0, jsx_runtime_1.jsx)("a", { href: props.href || "#!", className: "dropdown-item dropdown-submenu dropdown-toggle", onClick: onClick, children: props.title }), (0, jsx_runtime_1.jsx)("div", { className: "dropdown-menu", ref: refSubMenuContent, children: props.children })] }));
});
exports.DropdownSubmenu.displayName = 'DropdownSubmenu';
