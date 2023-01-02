"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownSubmenu = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
exports.DropdownSubmenu = function (props) {
    var refSubMenuContent = react_1.useRef(null);
    var className = 'dropdown-submenu-container';
    className = props.className
        ? className + ' ' + props.className
        : className;
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
    var hideSiblings = function () {
        if (refSubMenuContent.current) {
            var parents = getParents(refSubMenuContent.current, '.dropdown-menu.show');
            if (parents.length > 1) {
                hideChildren(parents[1]);
            }
        }
    };
    var hideChildren = function (parent) {
        var children = parent.querySelectorAll('.dropdown-menu.show');
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            child.classList.remove('show');
        }
    };
    var getParents = function (elem, selector) {
        var nodes = [];
        var element = elem;
        nodes.push(element);
        while (element.parentNode) {
            if (typeof element.parentNode.matches === 'function' &&
                element.parentNode.matches(selector)) {
                nodes.push(element.parentNode);
            }
            element = element.parentNode;
        }
        return nodes;
    };
    return (React.createElement("div", { className: className, id: props.id },
        React.createElement("a", { href: props.href, className: "dropdown-item dropdown-submenu dropdown-toggle", onClick: onClick }, props.title),
        React.createElement("div", { className: "dropdown-menu", ref: refSubMenuContent }, props.children)));
};
