"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavDropdownMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
exports.NavDropdownMenu = (0, react_1.forwardRef)(function (props, ref) {
    var divEl = (0, react_1.useRef)(null);
    var onToggle = function (show, meta) {
        if (divEl.current) {
            if (show === false) {
                var element = divEl.current;
                var children = element.querySelectorAll('.dropdown-menu.show');
                // Standard for-loop for maximum backward compatibility
                for (var i = 0; i < children.length; i++) {
                    children[i].classList.remove('show');
                }
            }
        }
        if (typeof props.onToggle === 'function') {
            props.onToggle(show, meta);
        }
    };
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.NavDropdown
    // Merging your internal ref with the forwarded ref
    , { 
        // Merging your internal ref with the forwarded ref
        ref: function (node) {
            divEl.current = node;
            if (typeof ref === 'function')
                ref(node);
            else if (ref)
                ref.current = node;
        }, className: props.className, title: props.title, id: props.id, onToggle: onToggle, align: props.alignRight ? "end" : props.align, disabled: props.disabled, active: props.active, menuRole: props.menuRole, renderMenuOnMount: props.renderMenuOnMount, rootCloseEvent: props.rootCloseEvent, bsPrefix: props.bsPrefix, drop: props.drop, show: props.show, focusFirstItemOnShow: props.focusFirstItemOnShow, children: props.children }));
});
exports.NavDropdownMenu.displayName = 'NavDropdownMenu';
