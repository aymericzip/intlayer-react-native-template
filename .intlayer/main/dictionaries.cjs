const _Bgeqp7HFgX1BjXWdlia8 = require('../dictionary/home-screen.json');
const _qMHlx2PiYneNV6FuauL1 = require('../dictionary/root-layout.json');
const _lrmeJxYUDn9V73sLglmM = require('../dictionary/tab-two-screen.json');
const _VZI3Nnx1P1WzVr4fqSgF = require('../dictionary/tabs-layout.json');

const dictionaries = {
  "home-screen": _Bgeqp7HFgX1BjXWdlia8,
  "root-layout": _qMHlx2PiYneNV6FuauL1,
  "tab-two-screen": _lrmeJxYUDn9V73sLglmM,
  "tabs-layout": _VZI3Nnx1P1WzVr4fqSgF
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;
