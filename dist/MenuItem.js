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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var React = __importStar(require("react"));
var DropdownItem_1 = __importDefault(require("react-bootstrap/DropdownItem"));
exports.MenuItem = function (props) {
    var onSelect = function (eventKey, event) {
        if (typeof props.onSelectV2 === 'function') {
            props.onSelectV2(eventKey, event);
        }
    };
    var onClick = function (event) {
        if (typeof props.onClick === 'function') {
            props.onClick(event);
        }
        onSelect(props.eventKey, event);
    };
    return (React.createElement(DropdownItem_1.default, { id: props.id, href: props.href, title: props.title, className: props.className, active: props.active, disabled: props.disabled, onSelect: props.onSelect, onClick: onClick }, props.children));
};
