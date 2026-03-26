"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DropdownItem_1 = __importDefault(require("react-bootstrap/DropdownItem"));
exports.MenuItem = (0, react_1.forwardRef)(function (props, ref) {
    var onSelectV2 = props.onSelectV2, onClick = props.onClick, eventKey = props.eventKey, children = props.children, rest = __rest(props, ["onSelectV2", "onClick", "eventKey", "children"]);
    var handleClick = function (event) {
        if (onClick)
            onClick(event);
        if (onSelectV2)
            onSelectV2(eventKey, event);
    };
    return ((0, jsx_runtime_1.jsx)(DropdownItem_1.default, __assign({}, rest, { ref: ref, eventKey: eventKey, onClick: handleClick, children: children })));
});
exports.MenuItem.displayName = 'MenuItem';
