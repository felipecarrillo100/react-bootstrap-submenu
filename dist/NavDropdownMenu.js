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
exports.NavDropdownMenu = void 0;
var React = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
exports.NavDropdownMenu = function (props) {
    var divEl = react_1.useRef(null);
    var onToggle = function (show, meta) {
        if (divEl.current) {
            if (show === false) {
                var element = divEl.current;
                if (element) {
                    var children = element.querySelectorAll('.dropdown-menu.show');
                    // @ts-ignore
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        child.classList.remove('show');
                    }
                }
            }
        }
        if (typeof props.onToggle === 'function') {
            props.onToggle(show, meta);
        }
    };
    return (React.createElement(react_bootstrap_1.NavDropdown, { ref: divEl, className: props.className, title: props.title, id: props.id, onToggle: onToggle, align: props.alignRight ? "end" : undefined, disabled: props.disabled, active: props.active, menuRole: props.menuRole, renderMenuOnMount: props.renderMenuOnMount, rootCloseEvent: props.rootCloseEvent, bsPrefix: props.bsPrefix, drop: props.drop, show: props.show, focusFirstItemOnShow: props.focusFirstItemOnShow }, props.children));
};
