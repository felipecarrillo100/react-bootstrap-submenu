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
exports.DropdownSubmenu = void 0;
var React = __importStar(require("react"));
require("../src/index.css");
var DropdownSubmenu = /** @class */ (function (_super) {
    __extends(DropdownSubmenu, _super);
    function DropdownSubmenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refSubMenuContent = null;
        _this.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (_this.refSubMenuContent) {
                var show = false;
                if (_this.refSubMenuContent.classList.contains('show')) {
                    DropdownSubmenu.hideChildren(_this.refSubMenuContent);
                }
                else {
                    show = true;
                    _this.hideSibblings();
                }
                _this.refSubMenuContent.classList.toggle('show');
                if (typeof _this.props.onToggle === 'function') {
                    _this.props.onToggle(show, event, { source: 'select' });
                }
            }
        };
        _this.hideSibblings = function () {
            if (_this.refSubMenuContent) {
                var parents = DropdownSubmenu.getParents(_this.refSubMenuContent, '.dropdown-menu.show');
                if (parents.length > 1) {
                    DropdownSubmenu.hideChildren(parents[1]);
                }
            }
        };
        return _this;
    }
    DropdownSubmenu.prototype.render = function () {
        var _this = this;
        var className = 'dropdown-submenu-container';
        className = this.props.className
            ? +className + ' ' + this.props.className
            : className;
        return (React.createElement("div", { className: className },
            React.createElement("a", { href: this.props.href, className: "dropdown-item dropdown-submenu dropdown-toggle", onClick: this.onClick }, this.props.title),
            React.createElement("div", { className: "dropdown-menu", ref: function (ref) { return (_this.refSubMenuContent = ref); } }, this.props.children)));
    };
    DropdownSubmenu.hideChildren = function (parent) {
        var children = parent.querySelectorAll('.dropdown-menu.show');
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            child.classList.remove('show');
        }
    };
    DropdownSubmenu.getParents = function (elem, selector) {
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
    return DropdownSubmenu;
}(React.Component));
exports.DropdownSubmenu = DropdownSubmenu;
