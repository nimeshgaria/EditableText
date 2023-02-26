'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function LikeButton() {
  var _React$useState = React.useState({
      row1: {
        td1: ""
      },
      row2: {
        td1: ""
      }
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    table = _React$useState2[0],
    setTable = _React$useState2[1];
  var onChandleHandler = function onChandleHandler(e) {
    var nameArray = e.target.id.split("_");
    console.log(e.target.innerHTML, e.target.id, nameArray);
    if (nameArray.length > 1) {
      var rowName = nameArray[0];
      var tdName = nameArray[1];
      console.log(table[rowName]);
      setTable(_objectSpread(_objectSpread({}, table), {}, _defineProperty({}, rowName, _objectSpread(_objectSpread({}, table[rowName]), {}, _defineProperty({}, tdName, e.target.innerHTML)))));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Onboarding Calls"), /*#__PURE__*/React.createElement("div", {
    id: "row1_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td1), /*#__PURE__*/React.createElement("div", {
    id: "row1_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td2), /*#__PURE__*/React.createElement("div", {
    id: "row1_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td3), /*#__PURE__*/React.createElement("div", {
    id: "row1_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Google Search Console Access"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Google Analytics Access"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Website Access"), /*#__PURE__*/React.createElement("div", {
    id: "row1_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td1), /*#__PURE__*/React.createElement("div", {
    id: "row1_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td2), /*#__PURE__*/React.createElement("div", {
    id: "row1_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td3), /*#__PURE__*/React.createElement("div", {
    id: "row1_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Technical Audit "), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Anchor Text and Semantic Analysis"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Competitor Analysis "), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Anchor Text/ URL mapping"), /*#__PURE__*/React.createElement("div", {
    id: "row1_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td1), /*#__PURE__*/React.createElement("div", {
    id: "row1_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td2), /*#__PURE__*/React.createElement("div", {
    id: "row1_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td3), /*#__PURE__*/React.createElement("div", {
    id: "row1_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Google Data Studio Report + Local Reporting Suite "), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Site Level Optimization"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "On Page Optimization"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Content Creation "), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Content Publishing"), /*#__PURE__*/React.createElement("div", {
    id: "row1_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td1), /*#__PURE__*/React.createElement("div", {
    id: "row1_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td2), /*#__PURE__*/React.createElement("div", {
    id: "row1_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td3), /*#__PURE__*/React.createElement("div", {
    id: "row1_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row1.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Premium Press Release "), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Authority Niche Placements"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Review Management"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Index Links"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, "Video Recap"), /*#__PURE__*/React.createElement("div", {
    id: "row2_td1",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td1), /*#__PURE__*/React.createElement("div", {
    id: "row2_td2",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td2), /*#__PURE__*/React.createElement("div", {
    id: "row2_td3",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td3), /*#__PURE__*/React.createElement("div", {
    id: "row2_td4",
    className: "rowItem",
    contentEditable: true,
    onInput: onChandleHandler
  }, table.row2.td4)));
}
var rootNode = document.getElementById('like-button-root');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));