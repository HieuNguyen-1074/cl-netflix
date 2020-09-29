"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: inline-block;\nbackground: var(--main-red);\ntext-transform : uppercase;\nborder : none;\noutline : none;\nmargin : ", ";\npadding: ", " ;\nborder-radius: 0.1875rem;\nfont-size : ", ";\ntext-align : center;\nbox-shadow : 0 1px 0 rgba(0,0,0,0.45);\ntransition : background  0.2s ease-in;\ncursor : pointer;\ncolor: #fff;\n&:hover{\n    background : var(--main-red-hover)\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.primary ? '0' : '0';
}, function (props) {
  return props.primary ? '1.2rem 1.5rem' : '.8rem 1.3rem';
}, function (props) {
  return props.primary ? '2rem' : '1rem';
});

exports.Button = Button;