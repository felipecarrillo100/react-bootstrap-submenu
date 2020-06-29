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
exports.NavDropdownMenu = void 0;
var React = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var NavDropdownMenu = /** @class */ (function (_super) {
    __extends(NavDropdownMenu, _super);
    function NavDropdownMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refElement = null;
        _this.onToggle = function (show, event, metadata) {
            if (_this.refElement) {
                if (show === false) {
                    var element = _this.refElement;
                    if (element) {
                        var children = element.querySelectorAll('.dropdown-menu.show');
                        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                            var child = children_1[_i];
                            child.classList.remove('show');
                        }
                    }
                }
            }
            if (typeof _this.props.onToggle === 'function') {
                _this.props.onToggle(show, event, metadata);
            }
        };
        return _this;
    }
    NavDropdownMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_bootstrap_1.NavDropdown, { className: this.props.className, ref: function (ref) { return (_this.refElement = ref); }, title: this.props.title, id: this.props.id, onToggle: this.onToggle, alignRight: this.props.alignRight, bg: this.props.bg, disabled: this.props.disabled, active: this.props.active, menuRole: this.props.menuRole, renderMenuOnMount: this.props.renderMenuOnMount, rootCloseEvent: this.props.rootCloseEvent, bsPrefix: this.props.bsPrefix, drop: this.props.drop, show: this.props.show, flip: this.props.flip, focusFirstItemOnShow: this.props.focusFirstItemOnShow }, this.props.children));
    };
    return NavDropdownMenu;
}(React.Component));
exports.NavDropdownMenu = NavDropdownMenu;
