"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.MenuItem = void 0;
var React = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelect = function (eventKey, event) {
            if (typeof _this.props.onSelect === 'function') {
                _this.props.onSelect(_this.props.eventKey, event);
            }
        };
        _this.eventKey = _this.props.eventKey;
        return _this;
    }
    MenuItem.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Dropdown.Item, { href: this.props.href, title: this.props.title, className: this.props.className, onSelect: this.onSelect, active: this.props.active, disabled: this.props.disabled, onClick: this.props.onClick }, this.props.children));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;
