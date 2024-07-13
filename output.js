//Sat Jul 13 2024 14:49:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var ckKey = "ltyd"; //双引号里面的内容就是环境变量名
/**
力天阅读 V1.1.0
1.1.0更新说明：修复不能阅读、阅读上传失败等问题
1.0.4更新说明：修复了提现门槛默认值错误的问题，更新入口
写本不易，走个下级呗

==================说明==================
功能：自动阅读，自动签到，自动提现，可设置提现门槛

限制：不限制下级，走一个下级就好了，台子不倒，持续更新，多谢
**入口：运行一次脚本就会打印最新可用入口**
**入口：运行一次脚本就会打印最新可用入口**
**入口：运行一次脚本就会打印最新可用入口**
推送：使用sendNotify全局推送
补充：ck时长7天，并且会被顶ck，无检测文章
报错的话说明平台崩了，设置好定时不用理就行
提示请重新登录才是ck过期
==================定时==================
cron 0 15/30 7/1 * * ? 
定时，从7:15开始，每半个小时执行一次

================环境变量================
【ck配置】
变量名：默认ltyd,可在代码第一行修改
变量值：昵称#ck 多号用&分割
昵称#ck&昵称#ck&昵称#ck
ck抓api.mb.s8xnldd7kpd.litianwm.cn的Authorization

【提现配置】
变量名：lttx
变量值：0或者1或者2
变量值说明：0:手动提现，1:满1自动提现，2:做完今日任务再自动提现
默认为2
每天只能提现一次，按需设置
=======================================
 */

var _0xodc = "jsjiami.com.v7";
var _0x2977dd = _0x4ef1;
((function (_0x4c0010, _0x23c899, _0x179bdf, _0x12c7fc, _0x3d7c20, _0x2d5ce4, _0x2b7959) {
  return _0x4c0010 = _0x4c0010 >> 8, _0x2d5ce4 = "hs", _0x2b7959 = "hs", function (_0x2385ee, _0x4ac85f, _0x3b0010, _0x1fa22b, _0x1ad1b1) {
    var _0x4a5da1 = _0x4ef1;
    _0x1fa22b = "tfi", _0x2d5ce4 = _0x1fa22b + _0x2d5ce4, _0x1ad1b1 = "up", _0x2b7959 += _0x1ad1b1, _0x2d5ce4 = _0x3b0010(_0x2d5ce4), _0x2b7959 = _0x3b0010(_0x2b7959), _0x3b0010 = 0;
    var _0x4ba33b = _0x2385ee();
    while (!![] && --_0x12c7fc + _0x4ac85f) {
      try {
        _0x1fa22b = parseInt(_0x4a5da1(251, "RnF*")) / 1 * (-parseInt(_0x4a5da1(498, "H$d6")) / 2) + parseInt(_0x4a5da1(617, "Fiw]")) / 3 * (parseInt(_0x4a5da1(705, "!4RM")) / 4) + -parseInt(_0x4a5da1(331, "s1%L")) / 5 * (-parseInt(_0x4a5da1(217, ")k7T")) / 6) + parseInt(_0x4a5da1(529, "5huW")) / 7 + parseInt(_0x4a5da1(366, "a$VV")) / 8 + -parseInt(_0x4a5da1(449, "%Qi0")) / 9 + -parseInt(_0x4a5da1(325, "nL#g")) / 10 * (parseInt(_0x4a5da1(306, "0kb1")) / 11);
      } catch (_0x3fdf47) {
        _0x1fa22b = _0x3b0010;
      } finally {
        _0x1ad1b1 = _0x4ba33b[_0x2d5ce4]();
        if (_0x4c0010 <= _0x12c7fc) _0x3b0010 ? _0x3d7c20 ? _0x1fa22b = _0x1ad1b1 : _0x3d7c20 = _0x1ad1b1 : _0x3b0010 = _0x1ad1b1;else {
          if (_0x3b0010 == _0x3d7c20["replace"](/[uxMRqEKIrLAnWGlOk=]/g, "")) {
            if (_0x1fa22b === _0x4ac85f) {
              _0x4ba33b["un" + _0x2d5ce4](_0x1ad1b1);
              break;
            }
            _0x4ba33b[_0x2b7959](_0x1ad1b1);
          }
        }
      }
    }
  }(_0x179bdf, _0x23c899, function (_0x3f2f39, _0x11a9d6, _0x273d8e, _0x591935, _0x9d6e64, _0x56e9a7, _0x333591) {
    return _0x11a9d6 = "split", _0x3f2f39 = arguments[0], _0x3f2f39 = _0x3f2f39[_0x11a9d6](""), _0x273d8e = `\x72\x65\x76\x65\x72\x73\x65`, _0x3f2f39 = _0x3f2f39[_0x273d8e]("v"), _0x591935 = `\x6a\x6f\x69\x6e`, (1446682, _0x3f2f39[_0x591935](""));
  });
})(51712, 909198, _0x222d, 204), _0x222d) && (_0xodc = 6716);
const notify = require("./sendNotify");
var Host = _0x2977dd(371, "EdNi"),
  mainHost = "fsuser.remd-studio.top",
  UserAgentStart = _0x2977dd(523, "a$VV"),
  UserAgentStop = _0x2977dd(407, "npgN"),
  log = "",
  startNum = 0,
  withdrawIndex = 2,
  withdrawList = [_0x2977dd(634, "H$d6"), _0x2977dd(632, "EdNi"), _0x2977dd(553, "%Qi0")],
  isRun = ![],
  userList = [];
function _0x222d() {
  var _0x40be6f = function () {
    return [...[_0xodc, "WOjsunxjRuGirIGaqGlmnAiluL.GOcMKom.vKk7E==", "W5WhnmkQgdfFpSkzWPWxjConWQddMSkiwSoqyu9gW6VcTaNcLXT/cCkqW5BcQSoIWR1SxYBcN8oPwaFcJCkQDYpcLq", "WQ7cNNXoW5i", "gbhcISkFWRzYgq", "W6edW67dNSkM", "brVcT1BdKG", "qd5NWP7dIq", "W57dTSoVWO5j", "kmk/WPVcTrL8oSomWOrCcSkgbq", "W4hcNKBcVmow", "WPZdRXSoW5K", "W7expmkxW44", "WOZcTmk1zCkl", "W5yKtX5dWPWb", "W4jFW7FcRSom", "ySkhWQqQtq", "imo4WOrRrG", "s8kZz8kREKKNnxeGdColySoBkq", "ybjSWPhdJq", "vmohirFcLW", "WRC3dmk3Bq", "W657bSkvyW", "W7uzW6NdSmkv", "DvZdUvvDWQCjW7BcUCkSW4f8qg3dQ3xdLSovW40Ab37cSmkgWRtcP8kQWQddQaj/WQlcSCkyWP0KW7vra8oSW5BdUY7cKWGozvdcTSkf", "W4XSW43cUmoi", "kmkHENpdLW", "W7aXsYGn", "W6K1hHW", "BmoEWPVcRSkC", "jmkXrKRdTG", "vcaxtG", "W5vpW55/WPq", "WP/dRsDYcG", "WRKEmCkQqG", "5O2s542w5Awg6lAM77+h5y2X6ikH5PQw5y2q5A6R5Bwp5lMF", "umoFWRJcHSkq", "hMJdV0O7", "qmklWRaesW", "6i+l5yYz5AwG6lEY772g5y+A6ioP5PMM5y615AYm5Bsv5lIX", "WO3dMsTDnW", "6iYT5y2C5AET6lAA77+b5y276ioy5PIe5yYE5A2y5BAT5lU4", "W7fTW6LcWPi", "WP8UWOr8jYOf", "wSohjrzj", "EmoVWOtcVmkM", "emoUjSk5sG", "W4WeibVcJG", "W6ytWPK", "W552W6e", "lrJcSg/dIG", "WO1XWQ9FW7y", "qmkIWRK", "W4HzoCksqq", "wceXBra", "W7BdSr8", "WRboWO56W78", "W4pdT8oLWQrD", "f8ocW4ZcLNK1uG0dx8oibSkH", "A8orbHtcSa", "W7VdUmkOW5BcRSo4qgxcM2u", "WQqjfCkOwq", "cZhcOq", "WR7cNmkID8kvW7e", "DSkMW4fsxq", "W7e+W6/dTSki", "hCkEi8kDlG", "W7FcJ2RcNSoj", "W57dOCkQW6VcNq", "WPdcUSkbxSkB", "5lMX5AwO5lUh5yUm", "nCkZaM7dN24", "W44qirZcKW", "DSoaWRlcUmk0", "W6CSWOO1jW", "W7FdR8kVW4ZcRmoZqa", "W6ldMq09bq", "W51/c8k5wG", "W57cUxOJx17dSSkfWQDFqmo1W4y", "hmoTe8kitG", "W73dUa0eiW", "WOzQWR5+W70", "WONcOe9IW7u", "F8ojhJhcNL3cGsnSdYblWPutnmouDdBcKSoHvXiNrNZcUW9oxWNdR3PmnSo/WQDqdrLkFmkLxWhcVfxcPfRcTmkiW53cRCkkWQ9rW6FcH8otWRVdRmo+W5dcImkSWQ7cVSkAWRGixSkECdeqW7hdO8kkv8kGA8kqFxhcUfa", "W5OzcmkdW4O", "WP/cP0P4W7m", "W40XWO0Moq", "W6VcQcTZWOu", "g8kwaCkUdW", "W69XW6NcOmoaW7b5WPFcTLi3h8oh", "sSoRnaHl", "BCoZbwje", "W5JdQSoiWRfs", "W5ZcTrZdQCkF", "mCkwgmkHgq", "5yIo5AEr6zMs6k28", "WQtdIcxdNCk8W7rQuG", "WQlcTfG3W5T8nhVcOvX2W4rDWRWKhW", "W5iDW43dICkh", "EmopnITF", "W57dJSk9W7FcTa", "W7ldVSkOW4/dT8k7cG", "5ys15AwH5O6u542Z", "WR/cHmkCwCk9", "W7Xqf8kmxG", "qYKgqYi", "6i+X5yYr5PEK56U65lQh6l2X6zcQ", "vCkyWQxdLa", "WPhcJM0pW4u", "vmkXW596xW", "BGNcUG1dW7K+W4FcISkYW6O9", "6i+c5y6I5AEi6lEj77+B5y+66ikb5PIz5yYF5A6P5Bwc5lMA", "rSoSma7cQG", "5yga5AYl5lML5PwI5lUs5yUR5yAc5O2M542n", "WP4IWQRdUmkw", "sdWgua", "6i6T5y2r5AAE6lAI77YL5y6L6ioY5PQz5yYn5A215BwL5lM6", "WOe7WPTMmG", "W7asBrTA", "CsbVWONdJmoc", "77Yo5Q215Pw+W4C", "k8oVWQnLza", "sSokW5xdKhe", "vSkCWQu", "5OsD6lg25l2X55Ev", "h8kStxZdLa", "WOi/jaBdTW", "W7qZWRddT8kn", "W78XcXNcI8k7W78", "hItcLSknWOy", "WO1DWQn1W5C", "W4FcTdZdT8ke", "WRBdIt0", "WQFcPvW6", "cCovhCkqDG", "W5yel8kdW7y", "h8o7W7dcG2HSmq", "W78XcXNcGCk6W6TeWRS", "W4WVDJXv", "rSouj2XM", "W7y9WOO9praH", "rCkJWROcrSouyW", "tdWgwa", "As8IuGe", "WRqIWRxdSmkzWQSS", "W6OSmmkhW5S", "oCoVemksxa", "W5BdVmkxW4BcOW", "W67cGXNdPmk/W7y", "WQbmWPXFW6a", "qmolnJ1p", "W4xcSYBdI8kU", "W7VdQX0SeYLJga", "W4RdO8k9W7BcGq", "f1JdNhqX", "W5CUwW", "WQqGhYVdRW", "W63dUmkAW4RcLq", "w8orerrB", "W5i9eCkmW4hdRSkLWR3cIWa", "b8oMcCkXAa", "w8o3WO/cOmkN", "WR9kWOr3W5y", "DmkRWQxdOcG", "gCoTe8kE", "fmoEWRLKuW", "iSoVWRPrta", "umo9W6xdLuS", "W4GXuarw", "ECopmZZcVG", "WQFdMtPWlq", "lSoxWRhcO8olbCkXW47dSmk8ftC2WQJdIXtcKY98WRrShhxcRSkToumsk8kAWOGjWPC6WO7cLCkxbfJdNCkJl8kgEbP1Ca"], ...function () {
      return [...["W7q2W7VdTSk7WP3dVW", "5B2v5lYj5yw45y+q776gW6JcKCoqW5FdRmo/umoIDvuPACoNWONcOcuosSkUWPddHmozBv5XD8kCWOBcV8oNkgX0WRBcVComk1dcL0WbWQFdRmotFxHiW5CAW4DrdCk9WRSEb8kJW4FcM3CTuYOhrmoGW6PeW73dGmoRDCkz", "W7HqpSkIvCkwWQW", "6iYe5y6z5PEI56If6zgC5OYN", "jCoJWRXUCW", "m2m4W4JcImkfW63dGL7cISopWP4", "WO/dRIf6bG0", "zSo6huPwWQy", "W7nfemklBG", "WRenWRv/nG", "WP02jaxdRq", "5AEB5yUL5y675Pwd", "kSk+d3ddHa", "dCkdnSk9aW", "WPlcJSk2W75b", "m1pdRvKkWOua", "W6ZdPYLjDG", "6i6B5yYB5lU05lUD5l+F5Oo05As06lwA776A5y6i6io35PIR5yYZ5A6P5BsI5lMc", "xSkIWQSjwG", "WQZcQmkGW7rr", "5RUGWOFOHkVLIAlMJltNJ5G", "5B+z5yIX6ysV5BMOuW", "5OMT5yMy5OYU54Yu", "WRpcPe1RW5S", "WOddVI4yW4K", "dWJcR0JdVq", "CJT9WOK", "56+D5yUh5As26lEH776F5y6d6igx5PIO5yYv5A2S5BEe5lUn", "WPJcKfLsW4W", "W69/m8kUxG", "iGlcSSk4WP0", "WQ7cQ256W7q", "W6tdM8o8WQqjDCoJW7BcKSkWcEwgHEI9S+IJQ+s5TEobPG", "W5hdRIiVnW", "ySkDWRBdTGm", "WOBdKtH2aG", "5yIb5Asy6zMx6kY4", "W6e7dq", "W6m2W7ZdVSky", "WRpcPfDgW4G", "WRKIWQbRcG", "WRRcG8k3W7Dg", "WQiQdZBdGq", "eHdcP03dMG", "W6NcIbT/", "WRxdOX4kW4m", "CZOvCqu", "WQddIGzviq", "WRKtpWldTW", "pSoeWQiHdMJdLdTqWQ9ycgK", "WPtcQ3KWW5W", "W6H9W5NcNmoO", "sSkaWOJdRHu", "d8kBoSkdda", "W5BcIsL1WQ0", "a1NdKvmW", "DtXTWRxdUW", "wSkPWR7dLc4", "r8kDWRegBW", "W59xW7ZcKCoS", "W7C5WPaYiq", "W6r7DvhcPhr2BafxWQe/5yEk6ygS6lAb5y665OU16koU5A675QYUW6VdR8oRWQRdJ8kOW7fXFYqy", "WOeQWOvUnq", "W65YW5FcJCol", "W7NcRYLAWO4", "qCkOWQ0ux8o8ya", "W5aUeCkgW4O", "WPlcJe55W6y", "W7LuW6D3WOi", "d8k7mmkJp0y", "zSkHFM3cIgTIpmk5W59IfSontdxdV2lcNSkUWQz4wJ81W4e5urBcKmkSW4pdPvNdHw5lW4dcQSksBetcMSk2lSoFWR8", "W4RcMwpcOCoRi8om", "WPiummkQvdbveSkfWP0", "W67cIra", "WQWFkW3dQG", "W7r2W7FcUSog", "WQFdGJ5ipW", "iCoJWODZtG", "vaqxAtW", "W4hcVgpcLmoG", "DmoYfJrY", "W7hcKHBdT8k+W60", "W7TvomkuFW", "WRCTWRbAdG", "W5WqWR0rgG", "WPuUWOm", "ESoSeY9z", "A8ktW7X3ttG", "WPWCWPLSaa", "W5OZsarbWPCbW57dLmop", "WPKTWQ3dPSk5", "aSolWRbUwW", "ECoVh0rw", "W6ZdHCk7BmkBW79mgG", "WPdcOeWUW7y", "W7dcHq1IWOatW5G", "adRcMmkbWRi", "WPuzWQRdUCkf", "W48GtWzPWP4D", "5Rcs6l6F6kcP77+P5Bkt5lQp5yYr6yoP55YB5lUR", "kSoVp8krxa", "W7KiWP8Dhcu", "WQ7cOvSOW5n4ma", "fCo4e8kptvxcPKu", "5AsX5yUV5yYx5PsE", "WRldGYyQW4xdIq", "u8kyWR3dLbhcVYu", "W6KDWOOkaq", "WO/cQKakW6C", "imkwy2ldJW", "DSo3lcZcQa", "WQuNWQ3dQCk6", "W6XhkmkktG", "W44TWRyDmW", "W4K1BXaCW4m", "WQOxabJdGW", "vCkcWPO/za", "lh7dGhSF", "WRFdL0FcT8o+WQGFW5ddS8kbjmkt", "WPdcIZpcUmkHemkBE8ov", "WR9bWR1lW5S", "laFcQ8k4WR8", "W5qvc8k8W40", "sIjuWRVdSG", "DmkCW556yq", "776g5Q2D5PAouW", "WR8NWQ7dK8k6", "WQ8aySo3dSodWORdSCo2v3ib", "WQpcSLfjW5q", "W78nsIDW", "W5uZzbXs", "W6y5WOC4gby9", "tCk9WQ4lv8o4zaVdVWHKk8kPWOPKWQO", "WP7cLSkJE8kz", "kSk9cCkrmW", "W7eYWPa", "W7pdPmk4W5RcTCoBqW", "a8o+WOTmBW", "hSkUpCk2jfzX", "776l5QY75PEUW6m", "WOJcK8keW7jD", "W7ziW45mWP4", "iH3cRmkgWQe", "W5VdIcTOF1q", "6iYW5y+m5OQo5yMg", "W4GvvZLK", "WP0YkrJdRdO", "WPCdoqBdRq", "WOxdRYP0fYFcOq", "W7jfjSkZsmopW6BcTW", "xSofW6ZdLhS", "W6GzoZRcLq", "WOtdQmokWPPXcmo/", "CSoIWOpcUmkE", "oSo9W6JcPNO", "W5GCW4/dLCk4", "W6K0rb5X", "W4FcQGLhWQ8", "W73cLZldK8kx", "W58HeG7cKW", "AmofWQZcRmkN", "W6PZW6BcImoO", "WONdSJzMnG", "WPOodCkxxW", "nmkle8kooq", "WRSMWQRdOSkwWQ8S", "ssywrtldU8oI", "W7K5WPuVmHqH", "WOKqCJ5RWQ8c", "xmo5jgj3", "W5ZdVSkwW5xcOG", "W5lcHbrlWQi"], ...function () {
        return ["CSk2WPVdTJu", "W7VdKSk5W7pcLq", "D8k0WR3dQqS", "WOJcG8k0B8kY", "6i2U5yYW5lUR5lIJ5l+v5OcN5AEV6lEU776J5y2I6ioj5PUB5y2t5A+35BEA5lUW", "6iYb5y2V5lQU5lMZ5l+z5OcZWQm", "y8oUhHrc", "pSoiWOfrxqCc", "drdcTCkAWQa", "5O2654+QoG", "WQtdOIGSW4K", "qSkyWRetsG", "nmokWQrwvW", "W5FdGmobWR9H", "56Yz5yMUW7W", "BZf9WO7dMmowW78", "DSk/W7Pgvq", "6i2z5y6q5PEp56Qm5lQ06lYL6zk1AW", "WR0NWPJdHmks", "gCo/W6lcJgjTjqWj", "W4KBwYfZ", "WQ/cGCk5zCkL", "W5hcQIhdLSkj", "o8kLB2ddPMjGn8k+", "WOJcMhfAW6G", "zq1FWRVdRa", "W77cJXP0", "AComeqj9", "W5KUyq8aW5u", "W7VcIrnuWO4", "WR3cMMLDW6K0aG", "bCokWRT1vG", "BmoIW6hdNMe", "5PYR5OUi5yUX6lES5yYt772K6kYP5O6L54E+6kwr5RcY6ywv57Y55AA254Yq5Ak45yYK6yAg", "y8k1WPFdKYm", "quddISoDW6yMjgxcTCkljCkY", "ebpcRMBdUG", "xmkCWQldHH7cUYu", "d8o7W7FcIq", "5lIS5OMv5OUU5yI7", "WRuWWO/dSSkp", "rCoeWOBcJSk+", "WP4dn8kWvJTv", "W7K8BXyI", "W6T/W7dcVSoxWOm", "W701uraB", "WQWSiq/dQq", "tmoVWOJcVmk3", "WRhcH8k5za", "5yA75AAl5O63542p", "z8oVpWnN", "W65zn8kT", "WPGjWQpdNmke", "WO/dOdPYbW", "WPJcMtDwuMGWsW", "W4mSc8kpW5S", "umkJWQJdKZu", "n1pdI3S/", "umklWQxdNbZcScxcMbNdLa", "v8oieG", "sCo6mSk9b1rzgW", "6i2H5y6v5PwE56MX5lUA6l6K6zk3W48", "W77cJXf6WOGr", "WRKEWRj7na", "WQOcWO9fmG", "WR4+hCkYuW", "dYRcSLddJfy2yW", "DXPVWPddNa", "WRvqiSkQfmkyWQBdUSomqvvKWQvTWPrqWP7dQSozW5/cO1ddS8o1gmkkWOlcOcBdMSkRW5TAwCkwqM7cKSkqW44lW7pcLmoZWQVcVg8", "W6/cVfpcHCox", "W4mfWRmeaG", "WOHsWRbrW4u", "WRxcICkM", "W6GJW7ZdRCokW5FcQq", "W51ch8kXEa", "pKZdILiN", "WOnjWRTnW6y", "WOyQWOrKdsGz", "ymohfZzS", "6i+K5y275Pw156Uc6zoc5O+fxq", "WOpcRmk2W496", "WOpdMteYW78", "WR3dGY4", "WR4iiJVdLG", "WRSGcSkmBq", "WPhcHCkgzCks", "W4hdTWingG", "W6pdHmkxW7hcHq", "WQVcVK0zW5e", "pCkFg8kXba", "zaj9WOxdKG", "b8o/W63cJ1DH", "mdhcL0VdKq", "W6hdUGG4k3y1", "cCoTfmkuDqRdSa", "a8krvg3dHgdcIuqntxK", "nmkIaN7dOxJcRq", "nG3cShNdTW", "y8oxWQ3cQ8kkc8k7", "W4HnW49lWRi", "ymogWQJdPmkjcSoWW5/cOCkOhNqZWQ/cIfdcJc00WRfMax3cO8kcpfPvk8ky", "y8oXf0HAWOhcRa", "W6ddUGC4lNW4xJ95", "W74tDXLT", "rSkVW7TJxG", "WQFdRWagW4e", "WOddGWGKW4S", "WPFcI8k4DCkj", "CSk4W7n9xa", "W7VdHdDvqq", "W5ldMmoWWQG", "WQVcNNXy", "W6ldOdvvzq", "W4W0trPk", "WQxdVayGW6G", "W4xdICoOWQbm", "dYKcswxdMCoRW6rxW7LUW5ldVmofdfpcKSoMWQpdTmkCAI3dLNlcGxRdLHShW4RcSx7dL8k0tCob", "W67dHSk5W7BcUW", "WOXLWQ54W60piq", "rXnyWR/dJa", "5ysA5OUK5yQZ", "WQpcLhGXlqrKd8o6BvJdNUocJW", "W6avlGZcSG", "prxcISkfWRy", "W5i0WPuAbW", "eY7cJCkJWQe", "W4/cMga", "WPSikqhdVa", "W5BcRr9EWQC", "W7G5WOG7jXS", "o2FdSfO4", "5O+A54YV5QMs5BYI77Y4", "WOZcQgipW6i", "W6/cHr91WQOrW4q", "zCojjHWsW6dcJq", "W73dNHffAa", "zSkFnf/dQdldPq7cNSkze8kfwbFcTxtcNCoEW6HEWQRcPrqRW6JdGmoUWQdcUNqynmoqfmo8B8kWW4xdLYXTb8o+FJKsAtldJNC3fxTEWReGhSo+nCojpgZdS8kQb8kvpbObW51kW7VdMCowW4RdMftcHSo2sx91gJddP1BcP8oGW4byW4VcNZfhWQmfs8kNDMijfYBdUSouWP83W5NcGCksWPBcMmkvWQldTmoNW4uSaeDsW6dcVKyCW6KEDSoYbX91WPhcJXNcVcNdJZ7dIe4", "vmkoWPJdOZa", "5O2554YzFW", "E8ouW6NdK1e", "zCofpdBcKa", "ncZcOxhdSa", "u8ouedhcKv3cHuiSta", "WRdcMKBdV8o9W6jVW4xcLmkhvSkLia", "562K5yQ3WPu", "W5KoqGKp", "W7NdPCk4W5O", "WQRcQKW+W4PqmW", "z8ork25k", "WQhcTNX9W7m", "uI0traVdKmoPW69q", "W4JdKsXJyW", "WO/cO3OVW5W", "W4JcQb9JWQi", "fSkDpmk4bq", "cmocbSkswW", "WPDUWQT5W5qKkSocDa", "W5OVCXm", "WQ9mWR15W7W", "W6tcMvFcJ8oE", "WQ7cH8kSAmkjW6C", "x8kEW5HrFa", "W7Sdl8kqW7y", "DCkCW6b0vG", "W7yzW4BdKCk/", "WQtcOvW", "W4ORe8klW5y", "FSoroW9n", "W7/dTmopWQDz", "WO/cUCkDsCkO", "WR7dGW4BW5S"];
      }()];
    }()];
  }();
  _0x222d = function () {
    return _0x40be6f;
  };
  return _0x222d();
}
;
class UserInfo {
  constructor(_0x176b9d) {
    var _0x75e961 = _0x2977dd;
    this[_0x75e961(426, "nTH!")] = _0x176b9d[_0x75e961(514, "0RCZ")]("#")[0], this["cookie"] = _0x176b9d[_0x75e961(608, "$Za1")]("#")[1], this[_0x75e961(290, "uZW8")] = mainHost, this["taskKey"] = null, this[_0x75e961(301, "guWD")] = null, this[_0x75e961(599, "3w4m")] = 0, this[_0x75e961(369, "EdNi")] = 0;
  }
}
const axios = require(_0x2977dd(422, "nL#g"));
!(async () => {
  var _0x42991b = _0x2977dd,
    _0x173e53 = {
      "idSJz": function (_0x47dd3e) {
        return _0x47dd3e();
      }
    };
  _0x173e53[_0x42991b(679, "D]vT")](start);
})()["catch"](_0x31d444 => console[_0x2977dd(492, "kV0H")](_0x31d444));
async function checkEnv() {
  var _0x55c0b7 = _0x2977dd,
    _0x288803 = {
      "ZJwVN": function (_0x588ef8, _0x4891db) {
        return _0x588ef8(_0x4891db);
      },
      "PKaWe": function (_0x505532, _0x3c2369, _0x19e95f) {
        return _0x505532(_0x3c2369, _0x19e95f);
      },
      "HtNQa": _0x55c0b7(613, "D]vT"),
      "qIhVl": function (_0x22d597, _0x40b6ac) {
        return _0x22d597(_0x40b6ac);
      },
      "gjXKX": "\u5199\u672C\u4E0D\u6613\uFF0C\u8D70\u4E2A\u4E0B\u7EA7\u5457",
      "xBQGX": function (_0x2df6d0, _0x16d7e9) {
        return _0x2df6d0 != _0x16d7e9;
      },
      "sdtxM": function (_0x312974, _0x675557) {
        return _0x312974 !== _0x675557;
      },
      "aTfCV": "URdWr",
      "QgkNY": _0x55c0b7(582, "f3SM"),
      "ggVtk": function (_0x53bfa3, _0xb753e9) {
        return _0x53bfa3 == _0xb753e9;
      },
      "CFBpp": function (_0x41742c, _0x31cd54) {
        return _0x41742c + _0x31cd54;
      },
      "gYPyE": _0x55c0b7(645, "0tEG"),
      "AHXRi": function (_0x55c0c9, _0x411115) {
        return _0x55c0c9(_0x411115);
      }
    };
  _0x288803[_0x55c0b7(351, "%6DH")](consoleLog, _0x288803["HtNQa"]), _0x288803[_0x55c0b7(287, "JE6J")](consoleLog, _0x288803["gjXKX"]);
  _0x288803[_0x55c0b7(561, "e(iB")](process[_0x55c0b7(234, "0RCZ")]["lttx"], undefined) && (_0x288803[_0x55c0b7(210, "5huW")](_0x288803[_0x55c0b7(643, "guWD")], _0x288803[_0x55c0b7(445, "6^P$")]) ? (_0x43bb44(_0x55c0b7(639, "cV6b")), _0xcd77d8(() => {
    var _0x5699c8 = _0x55c0b7;
    _0x288803[_0x5699c8(219, "6Q](")](_0xc92180, _0x161724);
  }, 1200)) : withdrawIndex = _0x288803[_0x55c0b7(256, "Jtqx")](parseInt, process["env"][_0x288803[_0x55c0b7(253, "uZW8")]]));
  consoleLog(_0x55c0b7(402, "zt)C") + withdrawList[withdrawIndex]);
  if (_0x288803[_0x55c0b7(283, "e(iB")](process[_0x55c0b7(330, "a$VV")][ckKey], undefined)) return console[_0x55c0b7(649, "7j@@")](_0x288803[_0x55c0b7(621, "qq^H")](_0x55c0b7(304, "EdNi"), ckKey)), ![];
  var _0x17eb44 = process["env"][ckKey][_0x55c0b7(295, "D]vT")]("&");
  for (let _0x2df4e2 of _0x17eb44) {
    _0x288803["sdtxM"](_0x55c0b7(472, "jd)P"), _0x288803[_0x55c0b7(528, "s1%L")]) ? userList[_0x55c0b7(428, "^y7n")](new UserInfo(_0x2df4e2)) : _0x288803["PKaWe"](_0x36eb0f, _0x6e3562, _0x571269);
  }
  return _0x288803["AHXRi"](consoleLog, _0x55c0b7(391, "uZW8") + userList[_0x55c0b7(588, ")k7T")] + "\u4E2A\u8D26\u53F7"), !![];
}
async function start() {
  var _0x4c750a = _0x2977dd,
    _0x2ac046 = {
      "gZnYo": function (_0x357a7c) {
        return _0x357a7c();
      },
      "Khwgu": function (_0x4e0b8c, _0x4b6d22) {
        return _0x4e0b8c < _0x4b6d22;
      },
      "rZgLQ": function (_0x119280, _0x27f383) {
        return _0x119280 === _0x27f383;
      },
      "yEqjt": _0x4c750a(686, "sWdB"),
      "saras": function (_0x593ec0, _0x485597) {
        return _0x593ec0(_0x485597);
      },
      "QGxyw": "\u529B\u5929\u9605\u8BFB\u5F00\u59CB\u8FD0\u884C",
      "eKJfT": function (_0x585cb4, _0x39b42b) {
        return _0x585cb4(_0x39b42b);
      }
    };
  if (!(await _0x2ac046[_0x4c750a(221, "3w4m")](checkEnv))) return;
  if (_0x2ac046[_0x4c750a(626, "%6DH")](userList[_0x4c750a(362, "uZW8")], 0)) {
    if (_0x2ac046[_0x4c750a(291, "$Za1")](_0x4c750a(496, "6Q]("), _0x2ac046[_0x4c750a(246, "sWdB")])) return;else return;
  }
  _0x2ac046[_0x4c750a(674, "qq^H")](consoleLog, _0x2ac046[_0x4c750a(453, "!4RM")]), _0x2ac046[_0x4c750a(575, "3w4m")](getNext, -1);
}
async function getNext(_0x4cac09) {
  var _0x2eb1a7 = _0x2977dd,
    _0x169756 = {
      "JGwdi": function (_0x3415c4, _0x5b338e, _0x583397) {
        return _0x3415c4(_0x5b338e, _0x583397);
      },
      "XhJAE": function (_0x367d0e, _0xe13348) {
        return _0x367d0e(_0xe13348);
      },
      "rRjDV": function (_0x5257d4, _0x4008c8) {
        return _0x5257d4 + _0x4008c8;
      },
      "ayEvY": function (_0x5305c4, _0x5bb323) {
        return _0x5305c4 < _0x5bb323;
      },
      "KXtaB": function (_0x436c3c, _0x3cdeeb) {
        return _0x436c3c === _0x3cdeeb;
      },
      "aSFTx": "eVPfa",
      "vNNLO": function (_0x362918, _0x4a324b) {
        return _0x362918(_0x4a324b);
      },
      "RktnM": function (_0x70bfdb, _0x1c045c) {
        return _0x70bfdb >= _0x1c045c;
      }
    };
  _0x4cac09++;
  while (_0x169756[_0x2eb1a7(284, "RnF*")](_0x4cac09, userList[_0x2eb1a7(400, "0RCZ")])) {
    if (_0x169756[_0x2eb1a7(610, "vCp@")](_0x169756[_0x2eb1a7(410, "%Qi0")], _0x169756["aSFTx"])) {
      var _0x24f800 = _0x2eb1a7(218, "cV6b")[_0x2eb1a7(704, "zt)C")]("|"),
        _0x5c39fb = 0;
      while (!![]) {
        switch (_0x24f800[_0x5c39fb++]) {
          case "0":
            _0x4cac09++;
            continue;
          case "1":
            return;
          case "2":
            startNum++;
            continue;
          case "3":
            consoleLog(_0x2eb1a7(392, "nL#g") + userList[_0x4cac09][_0x2eb1a7(426, "nTH!")] + "\u3011\u5F00\u59CB\u8FD0\u884C===========");
            continue;
          case "4":
            await _0x169756[_0x2eb1a7(435, "6^P$")](getLinkIu, _0x4cac09);
            continue;
        }
        break;
      }
    } else {
      _0x169756[_0x2eb1a7(432, "JE6J")](_0xdb2302, _0x169756["rRjDV"](_0x169756["rRjDV"]("\u3010", _0x1bdbdc[_0x494b8b][_0x2eb1a7(398, "sWdB")]) + "\u3011", _0x3e4dc2[_0x2eb1a7(313, "Ffvt")])), _0x15efb2(() => {
        _0x169756["JGwdi"](_0x2d5ae4, _0x4352a3, ![]);
      }, 1200);
      return;
    }
  }
  if (_0x169756["RktnM"](_0x4cac09, userList[_0x2eb1a7(619, "zt)C")])) {
    _0x169756[_0x2eb1a7(616, "e(iB")](consoleLog, _0x2eb1a7(673, "sWdB")), _0x169756[_0x2eb1a7(429, "6Q](")](consoleLog, _0x2eb1a7(644, "%6DH") + startNum + "\u3011\u4E2A\u53F7===========", !![]), consoleError(_0x2eb1a7(564, "Fiw]"), !![]);
    return;
  }
}
async function getLinkIu(_0x3a4c61) {
  var _0x59119d = _0x2977dd,
    _0x76e598 = {
      "nWncF": function (_0x5483d4, _0x4d125b) {
        return _0x5483d4 + _0x4d125b;
      },
      "dOWKo": function (_0x2eb031, _0x2ede0f) {
        return _0x2eb031 + _0x2ede0f;
      },
      "HLJuT": function (_0x5d1a1b, _0x276e0c) {
        return _0x5d1a1b + _0x276e0c;
      },
      "ERKtO": function (_0x5d72fb, _0x342498, _0x8dfe38) {
        return _0x5d72fb(_0x342498, _0x8dfe38);
      },
      "ERtUW": _0x59119d(203, "RVZ1"),
      "mbAFt": _0x59119d(414, ")k7T"),
      "lFncu": function (_0x2152a5, _0x81f37c) {
        return _0x2152a5 !== _0x81f37c;
      },
      "EGVBu": function (_0x11dee0, _0x2e4bda) {
        return _0x11dee0 === _0x2e4bda;
      },
      "bEqvm": _0x59119d(620, "gzrz"),
      "gbMrI": function (_0x1d8db6, _0x118589) {
        return _0x1d8db6 != _0x118589;
      },
      "qLgjI": _0x59119d(401, "vrIu"),
      "VfWOU": function (_0x4aaea1, _0x4ba0f5) {
        return _0x4aaea1 + _0x4ba0f5;
      },
      "iUWxp": _0x59119d(332, "5huW"),
      "VXJaR": function (_0x59ba52, _0x2d934a) {
        return _0x59ba52 == _0x2d934a;
      },
      "DBCSR": function (_0x4a7b95, _0x2e4922) {
        return _0x4a7b95 < _0x2e4922;
      },
      "bKdPs": _0x59119d(555, "f3SM"),
      "DLvJR": function (_0xecb24f, _0x537444) {
        return _0xecb24f === _0x537444;
      },
      "YcUby": "QJSnV",
      "whcHB": _0x59119d(334, "qq^H"),
      "MeUHC": function (_0x3abf69, _0x21515f) {
        return _0x3abf69 + _0x21515f;
      },
      "DDaHy": function (_0x540716, _0x2fa4d5) {
        return _0x540716 + _0x2fa4d5;
      },
      "cevnr": function (_0x416894, _0x452ecb) {
        return _0x416894(_0x452ecb);
      },
      "yvpgH": function (_0x3660f6, _0x4e7627) {
        return _0x3660f6(_0x4e7627);
      },
      "BXYrl": _0x59119d(481, "Coh2"),
      "DkvTP": function (_0x8cb50c, _0x334e00, _0x995e55) {
        return _0x8cb50c(_0x334e00, _0x995e55);
      },
      "sTkTF": function (_0x14d593, _0x575aa9) {
        return _0x14d593 + _0x575aa9;
      },
      "mYzLP": function (_0x1b65b9, _0x212e76) {
        return _0x1b65b9 + _0x212e76;
      },
      "WHFsa": _0x59119d(546, "npgN"),
      "urdGw": _0x59119d(248, "gzrz"),
      "oyrDF": _0x59119d(464, "vrIu")
    };
  console["log"](_0x76e598[_0x59119d(657, "y[Pi")](_0x76e598[_0x59119d(244, "$Za1")](_0x76e598[_0x59119d(342, "6Q](")]("\u3010", userList[_0x3a4c61][_0x59119d(655, "RVZ1")]), "\u3011"), _0x76e598["WHFsa"])), axios[_0x59119d(572, "y[Pi")](_0x76e598["sTkTF"](_0x76e598[_0x59119d(433, "3w4m")](_0x76e598[_0x59119d(539, "TOe7")], Host), _0x76e598["oyrDF"]), {
    "headers": {
      "Authorization": userList[_0x3a4c61][_0x59119d(204, "y[Pi")],
      "User-Agent": _0x76e598[_0x59119d(665, "s1%L")](UserAgentStart, _0x3a4c61) + UserAgentStop,
      "Origin": mainHost
    }
  })["then"](function (_0x179075) {
    var _0x22582e = _0x59119d,
      _0x59bc4e = {
        "fBqPs": function (_0x4ca0c3, _0x4daa9e, _0x53b878) {
          var _0x21af2f = _0x4ef1;
          return _0x76e598[_0x21af2f(571, ")k7T")](_0x4ca0c3, _0x4daa9e, _0x53b878);
        },
        "sMpYe": _0x76e598[_0x22582e(603, "N%Ca")],
        "wvsrP": function (_0x51f31b, _0x42aa5e) {
          return _0x51f31b + _0x42aa5e;
        },
        "Cenge": function (_0x283c1f, _0xa6d908) {
          return _0x76e598["nWncF"](_0x283c1f, _0xa6d908);
        },
        "LKTAD": _0x22582e(560, "Fiw]"),
        "QfBLg": _0x76e598[_0x22582e(486, "nTH!")],
        "GNYza": function (_0x4cd708, _0x2d6ed5) {
          var _0x100790 = _0x22582e;
          return _0x76e598[_0x100790(478, "kV0H")](_0x4cd708, _0x2d6ed5);
        },
        "aXeLX": function (_0x588f44, _0x1e3dc7) {
          return _0x588f44(_0x1e3dc7);
        }
      };
    if (_0x76e598[_0x22582e(589, "6Q](")]("itBHU", _0x76e598[_0x22582e(446, "RVZ1")])) {
      if (_0x76e598["gbMrI"](_0x179075["status"], 200)) {
        if (_0x76e598[_0x22582e(390, "Fiw]")](_0x22582e(327, "N%Ca"), _0x76e598[_0x22582e(625, "s1%L")])) {
          consoleError(_0x76e598[_0x22582e(268, "zt)C")](_0x76e598["iUWxp"], _0x179075["status"]));
          return;
        } else _0x56a469(_0x4c64dc, _0x37a021);
      }
      var _0x56b035 = _0x179075["data"];
      if (_0x56b035[_0x22582e(417, "Coh2")] != 200 || _0x76e598["VXJaR"](_0x56b035[_0x22582e(547, "N%Ca")], null) || _0x76e598[_0x22582e(249, "%Qi0")](_0x56b035[_0x22582e(573, "j@Sd")][_0x22582e(581, "kV0H")](_0x76e598[_0x22582e(691, "cV6b")]), 0)) {
        if (_0x76e598[_0x22582e(228, "$Za1")](_0x76e598[_0x22582e(585, "3w4m")], _0x76e598[_0x22582e(668, "Fiw]")])) {
          if (_0x2b74dd[_0x22582e(286, "Fiw]")]["indexOf"](_0x59bc4e["sMpYe"]) >= 0) {
            _0xb325a9(_0x59bc4e["wvsrP"](_0x59bc4e[_0x22582e(513, "EdNi")](_0x59bc4e["Cenge"]("\u3010" + _0x1cd095[_0x3093ad]["uName"], "\u3011"), _0x3e6383[_0x22582e(483, "qq^H")]) + _0x59bc4e[_0x22582e(340, "cV6b")], _0x352e4a["articleNum"])), _0x59bc4e["fBqPs"](_0xb1ea75, () => {
              var _0x5b1e91 = _0x22582e;
              _0x59bc4e[_0x5b1e91(347, "6Q](")](_0x2d720c, _0x168785, ![]);
            }, 1200);
            return;
          } else _0x1e82d4[_0x22582e(343, "%6DH")](_0x59bc4e["Cenge"](_0x59bc4e[_0x22582e(232, "!4RM")]("\u3010" + _0x5a3af6[_0x468c98]["uName"] + "\u3011", _0x23cdb0["message"]) + _0x59bc4e[_0x22582e(579, "zt)C")], _0x45676c[_0x22582e(684, "Ffvt")]));
        } else {
          console["log"](_0x76e598[_0x22582e(594, "vrIu")](_0x76e598[_0x22582e(540, "Coh2")](_0x76e598[_0x22582e(525, "D]vT")]("\u3010", userList[_0x3a4c61]["uName"]), "\u3011"), _0x56b035["message"])), setTimeout(() => {
            var _0x45c88c = _0x22582e;
            if (_0x59bc4e[_0x45c88c(517, "gzrz")](_0x45c88c(601, "EdNi"), _0x45c88c(602, "6Q]("))) {
              var _0x2cdd23 = _0x59bc4e[_0x45c88c(703, "e(iB")][_0x45c88c(622, "sWdB")]("|"),
                _0x3e7dfc = 0;
              while (!![]) {
                switch (_0x2cdd23[_0x3e7dfc++]) {
                  case "0":
                    this["articleNum"] = 0;
                    continue;
                  case "1":
                    this[_0x45c88c(333, "Jtqx")] = _0x5226ba["split"]("#")[1];
                    continue;
                  case "2":
                    this[_0x45c88c(463, "6^P$")] = _0x49686a[_0x45c88c(557, "qq^H")]("#")[0];
                    continue;
                  case "3":
                    this[_0x45c88c(612, "6^P$")] = null;
                    continue;
                  case "4":
                    this[_0x45c88c(568, "7j@@")] = null;
                    continue;
                  case "5":
                    this["balance"] = 0;
                    continue;
                  case "6":
                    this[_0x45c88c(427, "6Q](")] = _0x12d19f;
                    continue;
                }
                break;
              }
            } else _0x59bc4e[_0x45c88c(480, "vCp@")](getNext, _0x3a4c61);
          }, 1200);
          return;
        }
      }
      var _0x372b76 = _0x56b035[_0x22582e(604, "nTH!")];
      _0x372b76 = _0x372b76["slice"](_0x372b76[_0x22582e(627, "vrIu")]("//") + 2), _0x372b76 = _0x372b76[_0x22582e(473, "vCp@")](0, _0x372b76[_0x22582e(235, "Coh2")]("/")), userList[_0x3a4c61][_0x22582e(421, "f3SM")] = _0x372b76, _0x76e598[_0x22582e(653, "%6DH")](getLinkApi, _0x3a4c61);
    } else {
      _0x47fa9d[_0x22582e(353, "y[Pi")](_0x76e598[_0x22582e(700, "qq^H")](_0x76e598[_0x22582e(676, "Jtqx")](_0x76e598[_0x22582e(651, "D]vT")]("\u3010", _0x216296[_0x3c84c1]["uName"]), "\u3011"), _0x3ab8f1[_0x22582e(515, "Coh2")])), _0x76e598[_0x22582e(374, "$Za1")](_0x32a0a0, () => {
        var _0x327a40 = _0x22582e;
        _0x59bc4e[_0x327a40(272, "Coh2")](_0x35fa77, _0x35427a);
      }, 1200);
      return;
    }
  })[_0x59119d(650, "6^P$")](_0x3b8799 => {
    var _0x1940a2 = _0x59119d;
    _0x76e598[_0x1940a2(672, "0RCZ")](consoleLog, _0x76e598[_0x1940a2(452, "3w4m")]), _0x76e598[_0x1940a2(508, "Coh2")](setTimeout, () => {
      _0x76e598["yvpgH"](getNext, _0x3a4c61);
    }, 1200);
  });
}
async function getLinkApi(_0x54d4db) {
  var _0x2793b1 = _0x2977dd,
    _0x270238 = {
      "hzeBc": function (_0x332815, _0x58a279) {
        return _0x332815 == _0x58a279;
      },
      "RJETw": function (_0x2d2027, _0x1e869c) {
        return _0x2d2027 + _0x1e869c;
      },
      "NJzMs": function (_0x399807, _0x4e2fe3) {
        return _0x399807(_0x4e2fe3);
      },
      "yYEvB": function (_0x5d3689, _0x3c6602, _0x554dc6) {
        return _0x5d3689(_0x3c6602, _0x554dc6);
      },
      "SrgQO": function (_0x3e39d8, _0x28f61a) {
        return _0x3e39d8 !== _0x28f61a;
      },
      "Dcwmb": _0x2793b1(423, "j@Sd"),
      "Bjicp": _0x2793b1(551, "0kb1"),
      "VlCxs": function (_0x36455a, _0x96997d) {
        return _0x36455a + _0x96997d;
      },
      "fVsxk": _0x2793b1(270, "Jtqx"),
      "sGVCg": _0x2793b1(260, "EeCF"),
      "mzEZD": function (_0x27e40b, _0x50a040) {
        return _0x27e40b == _0x50a040;
      },
      "GVfdc": _0x2793b1(542, "Ffvt"),
      "pQZyr": _0x2793b1(633, "c%Ln"),
      "GnPKM": function (_0x56a2fe, _0x118cad) {
        return _0x56a2fe(_0x118cad);
      },
      "wQACq": function (_0x2bf677, _0x361527) {
        return _0x2bf677 === _0x361527;
      },
      "KMaOF": "eyRvg",
      "SdduD": function (_0x45d0e5, _0x108ff0) {
        return _0x45d0e5(_0x108ff0);
      },
      "QRgYe": function (_0x425440, _0x103e5c) {
        return _0x425440(_0x103e5c);
      },
      "pPoTo": _0x2793b1(615, "3w4m"),
      "dqCnU": _0x2793b1(509, "!4RM"),
      "jPvgm": "https://",
      "pcnjy": _0x2793b1(442, "Ffvt"),
      "qFdae": function (_0x32d09e, _0x5be38b) {
        return _0x32d09e + _0x5be38b;
      },
      "qBHsp": _0x2793b1(611, "EdNi"),
      "Uskmx": _0x2793b1(405, "TOe7"),
      "xiCMZ": _0x2793b1(231, "kV0H")
    };
  console[_0x2793b1(502, "RVZ1")](_0x270238["RJETw"](_0x270238[_0x2793b1(565, "OOEW")]("\u3010", userList[_0x54d4db]["uName"]), "\u3011") + _0x270238["pPoTo"]);
  if (_0x270238["mzEZD"](userList[_0x54d4db][_0x2793b1(367, "npgN")], null)) {
    if (_0x270238[_0x2793b1(658, "f3SM")](_0x270238[_0x2793b1(298, "TOe7")], _0x270238[_0x2793b1(346, "vrIu")])) {
      var _0x4a2831 = _0x5d1268[_0x2ca2a7][_0x2793b1(438, "TOe7")](0, _0x2323ab[_0x4507d4]["indexOf"]("="));
      if (_0x270238[_0x2793b1(491, "6Q](")](_0x4a2831, _0x5cf2de)) return _0x262199[_0x5d99da][_0x2793b1(687, "EeCF")](_0x270238["RJETw"](_0x4a2831[_0x2793b1(699, "JE6J")], 1));
    } else axios[_0x2793b1(563, "N%Ca")](_0x270238[_0x2793b1(548, "j@Sd")](_0x270238[_0x2793b1(647, "vCp@")] + Host, _0x270238[_0x2793b1(326, "3w4m")]), {
      "headers": {
        "Authorization": userList[_0x54d4db][_0x2793b1(213, "^y7n")],
        "User-Agent": _0x270238[_0x2793b1(538, "6^P$")](UserAgentStart, _0x54d4db) + UserAgentStop,
        "Origin": mainHost,
        "Referer": mainHost + "/"
      }
    })["then"](function (_0x1ae334) {
      var _0x1441b5 = _0x2793b1,
        _0x6d3faf = {
          "XZLzH": function (_0x2d0e2a, _0x329af4) {
            var _0x34abd3 = _0x4ef1;
            return _0x270238[_0x34abd3(456, "kV0H")](_0x2d0e2a, _0x329af4);
          },
          "mhZdx": _0x1441b5(629, "kV0H"),
          "kgTpq": function (_0x2c68af, _0x350714, _0x555206) {
            var _0x3ad1ba = _0x1441b5;
            return _0x270238[_0x3ad1ba(485, "EdNi")](_0x2c68af, _0x350714, _0x555206);
          }
        };
      if (_0x270238[_0x1441b5(412, "RVZ1")](_0x270238[_0x1441b5(586, "nTH!")], _0x1441b5(689, "e(iB"))) readFn(_0x54d4db, _0x1ae334);else {
        var _0x2a1377 = {
          "EWPPK": function (_0x5180c8, _0x200398) {
            return _0x5180c8(_0x200398);
          }
        };
        _0x6d3faf[_0x1441b5(227, "D]vT")](_0xf7b68b, _0x6d3faf[_0x1441b5(469, "EdNi")]), _0x6d3faf["kgTpq"](_0x84c269, () => {
          _0x2a1377["EWPPK"](_0x5db3ce, _0x3a3eca);
        }, 1200);
      }
    })[_0x2793b1(324, "vCp@")](_0x563367 => {
      var _0x27bb56 = _0x2793b1;
      _0x270238[_0x27bb56(323, "5huW")](consoleLog, _0x270238[_0x27bb56(317, "sWdB")]), setTimeout(() => {
        _0x270238["NJzMs"](getNext, _0x54d4db);
      }, 1200);
    });
  } else axios["post"](_0x270238[_0x2793b1(516, "0tEG")](_0x270238["jPvgm"], Host) + _0x270238[_0x2793b1(606, "e(iB")], {
    "readKey": userList[_0x54d4db]["readKey"],
    "taskKey": userList[_0x54d4db][_0x2793b1(365, "nTH!")]
  }, {
    "headers": {
      "Authorization": userList[_0x54d4db][_0x2793b1(618, "vCp@")],
      "User-Agent": _0x270238[_0x2793b1(598, "TOe7")](UserAgentStart + _0x54d4db, UserAgentStop),
      "Origin": _0x270238["Uskmx"] + userList[_0x54d4db][_0x2793b1(577, "7j@@")],
      "Referer": _0x270238["Uskmx"] + userList[_0x54d4db][_0x2793b1(290, "uZW8")] + "/",
      "content-type": _0x270238[_0x2793b1(494, "f3SM")]
    }
  })["then"](function (_0x452afa) {
    var _0x417b16 = _0x2793b1,
      _0x33ef6e = {
        "rjrdo": function (_0x3dfa78, _0x51b4e2) {
          return _0x3dfa78(_0x51b4e2);
        },
        "ydvnt": function (_0x317885, _0x354700) {
          var _0x153443 = _0x4ef1;
          return _0x270238[_0x153443(696, "c%Ln")](_0x317885, _0x354700);
        }
      };
    if (_0x270238[_0x417b16(361, "Fiw]")] === _0x270238["sGVCg"]) {
      _0x33ef6e[_0x417b16(434, "JE6J")](_0x48b22a, _0x33ef6e[_0x417b16(437, "3w4m")](_0x417b16(409, "nL#g"), _0x2df2ce[_0x417b16(559, "Fiw]")]));
      return;
    } else readFn(_0x54d4db, _0x452afa);
  })[_0x2793b1(678, "3w4m")](_0x22bab1 => {
    var _0x5accee = _0x2793b1;
    _0x270238[_0x5accee(636, "y[Pi")](consoleLog, _0x270238[_0x5accee(447, "Fiw]")]), _0x270238["yYEvB"](setTimeout, () => {
      var _0x46bde0 = _0x5accee,
        _0x3d5b49 = {
          "eMQGU": function (_0x50a12f, _0x29e009) {
            var _0x4b7292 = _0x4ef1;
            return _0x270238[_0x4b7292(359, "j@Sd")](_0x50a12f, _0x29e009);
          },
          "EfGUH": function (_0x3bef3d, _0x48f5bf) {
            var _0x5a935e = _0x4ef1;
            return _0x270238[_0x5a935e(349, "TOe7")](_0x3bef3d, _0x48f5bf);
          },
          "WUwnn": _0x270238[_0x46bde0(530, "TOe7")],
          "Bnjll": function (_0x1cb95f, _0x4240f7) {
            return _0x1cb95f >= _0x4240f7;
          },
          "WiUjv": function (_0x11c2a4, _0x486ad2) {
            return _0x270238["NJzMs"](_0x11c2a4, _0x486ad2);
          },
          "QSvYH": function (_0x5418bc, _0x4246a5) {
            return _0x5418bc + _0x4246a5;
          },
          "CZshr": _0x270238["pQZyr"],
          "UzBUI": function (_0x37297e, _0x23d6d6) {
            var _0x577a20 = _0x46bde0;
            return _0x270238[_0x577a20(430, "cV6b")](_0x37297e, _0x23d6d6);
          }
        };
      if (_0x270238[_0x46bde0(698, "TOe7")](_0x270238[_0x46bde0(399, "Jtqx")], _0x270238[_0x46bde0(680, "jd)P")])) _0x270238[_0x46bde0(706, "j@Sd")](getNext, _0x54d4db);else {
        var _0x38062e = _0x46bde0(458, "s1%L")[_0x46bde0(386, "RnF*")]("|"),
          _0x5d0dc0 = 0;
        while (!![]) {
          switch (_0x38062e[_0x5d0dc0++]) {
            case "0":
              _0x27c339[_0x3d7b8][_0x46bde0(584, "5huW")] = _0x146520["data"]["balance"];
              continue;
            case "1":
              if (_0x2ab119 && (_0x3d5b49[_0x46bde0(250, "7j@@")](_0x1cd3f2, 1) || _0x3d5b49[_0x46bde0(695, "qq^H")](_0x542267, 2) && _0x33d0ae)) {
                _0x5464e3[_0x46bde0(489, "jd)P")](_0x3d5b49[_0x46bde0(660, "sWdB")]), _0x2adcc1(_0x25b01f);
                return;
              }
              continue;
            case "2":
              _0x21e361(_0x3e9dcb);
              continue;
            case "3":
              var _0x2ab119 = _0x3d5b49["Bnjll"](_0xf77f8[_0x3868f6][_0x46bde0(205, "N%Ca")], 1000);
              continue;
            case "4":
              _0x3d5b49["WiUjv"](_0x1bf294, _0x3d5b49[_0x46bde0(368, "RVZ1")](_0x3d5b49[_0x46bde0(709, "5huW")], _0x431462[_0xcd2f9a][_0x46bde0(614, "gzrz")]));
              continue;
            case "5":
              _0x3d5b49[_0x46bde0(241, "0kb1")](_0x15c484, _0x32c4f0);
              continue;
            case "6":
              var _0x146520 = _0x58c9c2["data"];
              continue;
            case "7":
              if (_0xd0f3b[_0x46bde0(431, "!4RM")] != 200) {
                _0x3d5b49["UzBUI"](_0xd63b86, _0x46bde0(276, "RnF*") + _0x4e31da["status"]);
                return;
              }
              continue;
          }
          break;
        }
      }
    }, 1200);
  });
}
function readFn(_0xd8141, _0xbd55b5) {
  var _0x3c70f3 = _0x2977dd,
    _0x41101f = {
      "tLeIv": function (_0x2ae66c, _0x3c155a) {
        return _0x2ae66c / _0x3c155a;
      },
      "jRmoO": function (_0x463bb1, _0x261116, _0x1595fe) {
        return _0x463bb1(_0x261116, _0x1595fe);
      },
      "XIxJt": function (_0x1219b9, _0xef32a2) {
        return _0x1219b9(_0xef32a2);
      },
      "RuxsS": function (_0x1ec729, _0x5df5ee) {
        return _0x1ec729 + _0x5df5ee;
      },
      "WoQkn": function (_0x2893a5, _0x54d04b) {
        return _0x2893a5 + _0x54d04b;
      },
      "jaTTr": function (_0x324560, _0x21c387) {
        return _0x324560 + _0x21c387;
      },
      "RhkQz": function (_0x2ea9d6, _0x2a1ced) {
        return _0x2ea9d6 + _0x2a1ced;
      },
      "WcXnb": _0x3c70f3(238, "EeCF"),
      "MYIvS": function (_0xc59ed4, _0x8e3184, _0x43f929) {
        return _0xc59ed4(_0x8e3184, _0x43f929);
      },
      "RmrYQ": function (_0xade0ce, _0x352f15) {
        return _0xade0ce(_0x352f15);
      },
      "Ymkzj": function (_0x23d2c3, _0x483e7e) {
        return _0x23d2c3(_0x483e7e);
      },
      "JFvOu": _0x3c70f3(288, "sWdB"),
      "kPoaQ": function (_0x4d006c, _0x298d4b) {
        return _0x4d006c !== _0x298d4b;
      },
      "sUvIz": _0x3c70f3(223, "JE6J"),
      "JzJRb": function (_0x581ba6, _0x49e83b, _0x322bee) {
        return _0x581ba6(_0x49e83b, _0x322bee);
      },
      "glvOf": function (_0x2c30d6, _0x523056) {
        return _0x2c30d6 + _0x523056;
      },
      "EPLhY": function (_0x1bee36, _0x21aebc) {
        return _0x1bee36 && _0x21aebc;
      },
      "zTIsv": _0x3c70f3(535, "g%b["),
      "DmHRO": _0x3c70f3(355, "Ffvt"),
      "mnBGM": function (_0x4d1cf5, _0x2cd314) {
        return _0x4d1cf5(_0x2cd314);
      },
      "mADqr": "DvnDN",
      "MXYqd": function (_0x40fc47, _0x41f77a) {
        return _0x40fc47(_0x41f77a);
      },
      "DrGDZ": function (_0xed5110, _0x1dfc70) {
        return _0xed5110 + _0x1dfc70;
      },
      "mqHNQ": _0x3c70f3(350, "e(iB"),
      "veNYH": function (_0x57cc20, _0x25e45a) {
        return _0x57cc20 != _0x25e45a;
      },
      "QiyLt": function (_0x1cff26, _0x5bf38a) {
        return _0x1cff26 === _0x5bf38a;
      },
      "CDKaS": _0x3c70f3(484, "TOe7"),
      "XUXYq": _0x3c70f3(510, "$Za1"),
      "gYQFU": function (_0x28b414, _0x1cda46) {
        return _0x28b414(_0x1cda46);
      },
      "DQHtZ": function (_0x553119, _0x2b93e0) {
        return _0x553119 + _0x2b93e0;
      },
      "VRzdw": _0x3c70f3(671, "EeCF"),
      "rOhzj": function (_0x878635, _0x4fe0af) {
        return _0x878635(_0x4fe0af);
      },
      "hoeTi": function (_0x6c1c98, _0x3b61bf) {
        return _0x6c1c98 + _0x3b61bf;
      },
      "FtJjo": function (_0x304950, _0x428661) {
        return _0x304950 + _0x428661;
      },
      "HLPXG": function (_0x4018c3, _0x135a96) {
        return _0x4018c3 >= _0x135a96;
      },
      "ogGEK": function (_0x150c19, _0x7460e7) {
        return _0x150c19 === _0x7460e7;
      },
      "ismfC": _0x3c70f3(574, "nTH!"),
      "YsRTh": "KtanH",
      "eAZlC": _0x3c70f3(310, "H$d6"),
      "ZICHM": function (_0x4d577b, _0x3cc3b6) {
        return _0x4d577b >= _0x3cc3b6;
      },
      "Jxuiu": function (_0x39c06a, _0x350b88) {
        return _0x39c06a(_0x350b88);
      },
      "nKZPy": function (_0x1304ee, _0x561522) {
        return _0x1304ee + _0x561522;
      },
      "sTBrz": function (_0x3450d0, _0x555f7e) {
        return _0x3450d0 + _0x555f7e;
      },
      "MFhRW": function (_0x35c41c, _0x1757dc) {
        return _0x35c41c + _0x1757dc;
      },
      "yODXZ": function (_0xf17816, _0x2a6ea2) {
        return _0xf17816 + _0x2a6ea2;
      },
      "APJfN": function (_0x3cba31, _0x5aa960) {
        return _0x3cba31 + _0x5aa960;
      },
      "OlJTP": function (_0x18afca, _0x52a599) {
        return _0x18afca + _0x52a599;
      },
      "vCIGm": function (_0x38e3bc, _0x5315be) {
        return _0x38e3bc + _0x5315be;
      },
      "XKGHH": function (_0x5aca2e, _0x17bd33) {
        return _0x5aca2e < _0x17bd33;
      },
      "KiWdL": function (_0x32ce17, _0x5e2a2a) {
        return _0x32ce17 == _0x5e2a2a;
      },
      "TwTIx": function (_0x4dc8c5, _0x209659) {
        return _0x4dc8c5 * _0x209659;
      },
      "PSynS": function (_0x1d07b3, _0x49022a) {
        return _0x1d07b3 % _0x49022a;
      },
      "AYisg": _0x3c70f3(289, "5huW"),
      "LnhQU": function (_0x52e97d, _0x4fe008) {
        return _0x52e97d / _0x4fe008;
      },
      "QoAeg": function (_0x37a445, _0x41cb99) {
        return _0x37a445 === _0x41cb99;
      },
      "nSLxj": "gHOxi",
      "GsKFo": "\u9605\u8BFB\u4E2D(",
      "esxwY": _0x3c70f3(567, "EeCF"),
      "CtozV": function (_0xbb0192, _0x274ff6, _0x3529a5) {
        return _0xbb0192(_0x274ff6, _0x3529a5);
      }
    };
  if (_0xbd55b5[_0x3c70f3(511, "npgN")] != 200) {
    if (_0x41101f[_0x3c70f3(670, "kV0H")](_0x41101f[_0x3c70f3(393, "7j@@")], _0x41101f["mADqr"])) _0x77a3d = _0x4b6e25(_0x41101f[_0x3c70f3(388, "Coh2")](_0x653693, 2));else {
      _0x41101f[_0x3c70f3(336, "Ffvt")](consoleError, _0x41101f[_0x3c70f3(312, "EdNi")](_0x41101f[_0x3c70f3(470, "OOEW")], _0xbd55b5["status"]));
      return;
    }
  }
  var _0x31e184 = _0xbd55b5["data"];
  if (_0x41101f[_0x3c70f3(303, "%Qi0")](_0x31e184[_0x3c70f3(297, "Jtqx")], 200)) {
    if (_0x41101f[_0x3c70f3(476, "EdNi")](_0x41101f[_0x3c70f3(512, "7j@@")], "lTFNI")) {
      _0x41101f["XIxJt"](_0xf3ab7c, _0x41101f[_0x3c70f3(255, "$Za1")](_0x41101f[_0x3c70f3(316, "^y7n")](_0x41101f["jaTTr"](_0x41101f[_0x3c70f3(493, "gzrz")]("\u3010", _0x580fa0[_0x4509f3][_0x3c70f3(708, "0kb1")]), "\u3011") + _0x28cef4[_0x3c70f3(454, "$Za1")], _0x41101f["WcXnb"]), _0x347875[_0x3c70f3(701, "$Za1")])), _0x41101f[_0x3c70f3(534, "s1%L")](_0x3ad586, () => {
        _0x41101f["jRmoO"](_0x4e3305, _0x483e98, ![]);
      }, 1200);
      return;
    } else {
      console[_0x3c70f3(685, ")k7T")](_0x41101f["DrGDZ"](_0x41101f[_0x3c70f3(258, "7j@@")]("\u3010" + userList[_0xd8141][_0x3c70f3(281, "y[Pi")], "\u3011"), _0x31e184[_0x3c70f3(444, "0kb1")])), setTimeout(() => {
        getNext(_0xd8141);
      }, 1200);
      return;
    }
  }
  if (_0x31e184[_0x3c70f3(266, "0RCZ")]["indexOf"](_0x41101f["XUXYq"]) >= 0) {
    _0x41101f[_0x3c70f3(296, "Fiw]")](consoleLog, _0x41101f[_0x3c70f3(209, "a$VV")](_0x41101f[_0x3c70f3(214, "sWdB")](_0x41101f[_0x3c70f3(662, "j@Sd")]("\u3010", userList[_0xd8141][_0x3c70f3(641, "gzrz")]), "\u3011"), _0x31e184["message"])), _0x41101f[_0x3c70f3(425, "s1%L")](setTimeout, () => {
      sign(_0xd8141, !![]);
    }, 1200);
    return;
  }
  if (_0x31e184[_0x3c70f3(677, "kV0H")]["indexOf"]("\u4E0D\u6EE1") >= 0) {
    if (_0x41101f["kPoaQ"](_0x41101f["VRzdw"], _0x3c70f3(504, "JE6J"))) {
      _0x41101f["rOhzj"](consoleLog, _0x41101f[_0x3c70f3(257, "g%b[")](_0x41101f[_0x3c70f3(269, "Coh2")](_0x41101f[_0x3c70f3(363, "RVZ1")]("\u3010", userList[_0xd8141]["uName"]), "\u3011"), _0x31e184[_0x3c70f3(677, "kV0H")])), userList[_0xd8141]["readKey"] = null, _0x41101f["jRmoO"](setTimeout, () => {
        var _0x26d5ac = _0x3c70f3;
        _0x41101f[_0x26d5ac(380, "nL#g")](getLinkApi, _0xd8141);
      }, 1200);
      return;
    } else {
      _0x41101f[_0x3c70f3(526, "0RCZ")](_0x253759, _0x41101f[_0x3c70f3(501, "Ffvt")](_0x3c70f3(415, "%Qi0"), _0x4bc835[_0x3c70f3(681, "s1%L")]));
      return;
    }
  }
  if (_0x41101f[_0x3c70f3(635, "D]vT")](_0x31e184["message"][_0x3c70f3(683, "cV6b")]("\u7B49\u5F85"), 0)) {
    if (_0x41101f[_0x3c70f3(663, "EeCF")](_0x41101f[_0x3c70f3(259, "EdNi")], _0x41101f[_0x3c70f3(220, "0kb1")])) {
      _0x542c22(_0x41101f[_0x3c70f3(640, "guWD")](_0x41101f[_0x3c70f3(490, "RVZ1")], _0x37b4a8[_0x3c70f3(245, "sWdB")]));
      return;
    } else {
      _0x41101f["RmrYQ"](consoleLog, _0x41101f[_0x3c70f3(461, "Ffvt")](_0x41101f[_0x3c70f3(212, "c%Ln")]("\u3010", userList[_0xd8141][_0x3c70f3(379, "JE6J")]) + "\u3011", _0x31e184[_0x3c70f3(308, "N%Ca")])), _0x41101f["jRmoO"](setTimeout, () => {
        var _0x3ea82c = _0x3c70f3;
        if (_0x41101f[_0x3ea82c(569, "0kb1")]("ucIgW", _0x41101f[_0x3ea82c(457, "e(iB")])) _0x41101f[_0x3ea82c(318, "EdNi")](getUserInfoApi, _0xd8141, ![]);else {
          _0xbf86d8("\u83B7\u53D6\u6587\u7AE0\u94FE\u63A5:" + _0x376b5d[_0x3ea82c(299, "^y7n")]);
          return;
        }
      }, 1200);
      return;
    }
  }
  var _0x11c3e5 = _0x31e184[_0x3c70f3(468, "7j@@")];
  if (_0x31e184[_0x3c70f3(313, "Ffvt")][_0x3c70f3(372, "zt)C")](_0x41101f["eAZlC"]) >= 0) {
    if (_0x41101f["ZICHM"](_0x31e184[_0x3c70f3(278, "e(iB")][_0x3c70f3(265, "f3SM")](_0x3c70f3(623, "7j@@")), 0)) {
      _0x41101f["Jxuiu"](consoleLog, _0x41101f["nKZPy"](_0x41101f[_0x3c70f3(416, "^y7n")](_0x41101f["MFhRW"](_0x41101f["WoQkn"]("\u3010" + userList[_0xd8141]["uName"], "\u3011"), _0x31e184["message"]), _0x3c70f3(224, "c%Ln")), _0x11c3e5[_0x3c70f3(413, "a$VV")])), setTimeout(() => {
        var _0x4cab46 = _0x3c70f3;
        _0x41101f[_0x4cab46(607, "%Qi0")](sign, _0xd8141, ![]);
      }, 1200);
      return;
    } else console["log"](_0x41101f[_0x3c70f3(692, "TOe7")](_0x41101f[_0x3c70f3(360, "s1%L")](_0x41101f["MFhRW"](_0x41101f[_0x3c70f3(403, "j@Sd")](_0x41101f[_0x3c70f3(216, "vrIu")]("\u3010", userList[_0xd8141][_0x3c70f3(497, "RnF*")]), "\u3011"), _0x31e184[_0x3c70f3(707, "Jtqx")]), _0x41101f[_0x3c70f3(712, "nTH!")]), _0x11c3e5["articleNum"]));
  } else {
    if (_0x41101f[_0x3c70f3(254, "6^P$")](_0x31e184[_0x3c70f3(707, "Jtqx")][_0x3c70f3(389, "6Q](")](_0x3c70f3(243, "EeCF")), 0) || _0x41101f[_0x3c70f3(652, "qq^H")](_0x31e184["data"], null)) {
      _0x41101f[_0x3c70f3(474, "Ffvt")](consoleLog, _0x41101f[_0x3c70f3(240, "jd)P")](_0x41101f[_0x3c70f3(252, "EdNi")]("\u3010", userList[_0xd8141]["uName"]), "\u3011") + _0x31e184[_0x3c70f3(264, "5huW")]), userList[_0xd8141]["readKey"] = null, _0x41101f["jRmoO"](setTimeout, () => {
        _0x41101f["JzJRb"](getUserInfoApi, _0xd8141, ![]);
      }, 1200);
      return;
    }
  }
  userList[_0xd8141][_0x3c70f3(404, "Jtqx")] = _0x11c3e5[_0x3c70f3(230, "0RCZ")], userList[_0xd8141][_0x3c70f3(710, "$Za1")] = _0x11c3e5[_0x3c70f3(576, "uZW8")], userList[_0xd8141][_0x3c70f3(500, "Coh2")] = _0x11c3e5[_0x3c70f3(329, "N%Ca")];
  var _0x4c4e82 = Math[_0x3c70f3(630, "kV0H")](_0x41101f[_0x3c70f3(406, "nL#g")](Math[_0x3c70f3(242, "nL#g")](), 6000) + 8000);
  _0x41101f[_0x3c70f3(609, "a$VV")](_0x41101f[_0x3c70f3(236, "e(iB")](_0x4c4e82, 55), 19) && (_0x41101f["ogGEK"](_0x41101f[_0x3c70f3(375, "JE6J")], _0x3c70f3(289, "5huW")) ? _0x4c4e82 = _0x41101f[_0x3c70f3(378, "!4RM")](parseInt, _0x41101f[_0x3c70f3(207, "j@Sd")](_0x4c4e82, 2)) : (_0x503eac(_0x3c70f3(479, "s1%L")), _0x41101f[_0x3c70f3(321, "TOe7")](_0x1c8b49, () => {
    _0x4a64a6(_0x3add94);
  }, 1200))), _0x41101f[_0x3c70f3(666, "Jtqx")](_0x4c4e82 % 20, 17) && (_0x41101f[_0x3c70f3(377, "y[Pi")](_0x41101f[_0x3c70f3(532, "RnF*")], _0x41101f[_0x3c70f3(277, "TOe7")]) ? _0x4c4e82 = _0x41101f[_0x3c70f3(487, "7j@@")](_0x4c4e82, 4466) : _0x4d8b85["log"](_0x41101f["jaTTr"](_0x41101f[_0x3c70f3(352, "y[Pi")](_0x41101f[_0x3c70f3(531, "zt)C")](_0x41101f[_0x3c70f3(357, "0tEG")]("\u3010", _0x33593e[_0x443753][_0x3c70f3(338, "Fiw]")]), "\u3011"), _0x25eae9[_0x3c70f3(483, "qq^H")]) + _0x41101f[_0x3c70f3(411, "a$VV")], _0x18d7ca["articleNum"]))), console[_0x3c70f3(649, "7j@@")](_0x41101f["WoQkn"](_0x41101f[_0x3c70f3(215, "kV0H")](_0x41101f[_0x3c70f3(376, "y[Pi")]("\u3010", userList[_0xd8141]["uName"]), "\u3011") + _0x41101f[_0x3c70f3(605, "e(iB")] + parseInt(_0x41101f[_0x3c70f3(690, "f3SM")](_0x4c4e82, 1000)), _0x41101f[_0x3c70f3(261, "vCp@")])), isRun = !![], _0x41101f[_0x3c70f3(482, "jd)P")](setTimeout, () => {
    var _0x3c002f = _0x3c70f3,
      _0x2f99c8 = {
        "xdLvw": function (_0x1aa27c, _0x35f892) {
          var _0x2e3cf9 = _0x4ef1;
          return _0x41101f[_0x2e3cf9(258, "7j@@")](_0x1aa27c, _0x35f892);
        },
        "hVihB": function (_0x35e3a7, _0x1a045d) {
          return _0x35e3a7 + _0x1a045d;
        },
        "KSQvx": function (_0x43b569, _0x4ef7d1) {
          return _0x41101f["EPLhY"](_0x43b569, _0x4ef7d1);
        },
        "XHksn": function (_0x9963ae, _0x531de9) {
          var _0x289cee = _0x4ef1;
          return _0x41101f[_0x289cee(335, "qq^H")](_0x9963ae, _0x531de9);
        },
        "wnJQw": _0x3c002f(711, "3w4m"),
        "PMzWX": _0x41101f[_0x3c002f(370, "jd)P")]
      };
    if (_0x41101f[_0x3c002f(669, "N%Ca")](_0x41101f[_0x3c002f(646, "H$d6")], "HFNOZ")) {
      _0x23b4a4[_0x3c002f(488, "c%Ln")](_0x1562d3), _0xd2a1 = _0x2f99c8[_0x3c002f(279, "0kb1")](_0x2f99c8[_0x3c002f(570, "6Q](")](_0x5057ce, _0x224475), "\n");
      if (_0x2f99c8[_0x3c002f(558, "$Za1")](_0x1839bb, !_0x17f007)) {
        _0x2f99c8[_0x3c002f(395, "c%Ln")](_0x25e2e6, _0x2f99c8[_0x3c002f(578, "$Za1")]);
        return;
      }
      _0x25f7c2[_0x3c002f(373, "0tEG")](_0x2f99c8[_0x3c002f(637, "RVZ1")](_0x2f99c8[_0x3c002f(562, "%Qi0")], ckKey), _0x42a124);
    } else _0x41101f[_0x3c002f(328, "vrIu")](getLinkApi, _0xd8141);
  }, _0x4c4e82);
}
async function sign(_0x2e447f, _0x219524) {
  var _0x2ad10f = _0x2977dd,
    _0x40b37d = {
      "bFblt": function (_0x561324, _0xe421bf) {
        return _0x561324 != _0xe421bf;
      },
      "zfzvV": function (_0x2a009f, _0x43e3e6) {
        return _0x2a009f(_0x43e3e6);
      },
      "faEOe": function (_0x31693c, _0x518d2b) {
        return _0x31693c + _0x518d2b;
      },
      "aatwp": function (_0x4310ca, _0x2d003f) {
        return _0x4310ca + _0x2d003f;
      },
      "Hasia": function (_0x50a05d, _0x3a779d, _0x4ba53a) {
        return _0x50a05d(_0x3a779d, _0x4ba53a);
      },
      "UwPan": function (_0x168569, _0x55f822) {
        return _0x168569 === _0x55f822;
      },
      "lyljn": _0x2ad10f(292, "!4RM"),
      "lpvJY": "\u7B7E\u5230\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u53F0\u5B50\u5D29\u4E86",
      "KIpYu": function (_0x599fc4, _0x1e2111, _0x25c3fe) {
        return _0x599fc4(_0x1e2111, _0x25c3fe);
      },
      "ewIVO": "/api/mobile/act/sign/v1/sign",
      "ihITh": function (_0x5c4367, _0x40e69f) {
        return _0x5c4367 + _0x40e69f;
      },
      "pdGUD": function (_0x40e8e2, _0x4833b5) {
        return _0x40e8e2 + _0x4833b5;
      },
      "pkOKV": "\u51C6\u5907\u7B7E\u5230"
    };
  console["log"](_0x40b37d["pdGUD"](_0x40b37d[_0x2ad10f(675, "EeCF")](_0x40b37d["pdGUD"]("\u3010", userList[_0x2e447f][_0x2ad10f(338, "Fiw]")]), "\u3011"), _0x40b37d["pkOKV"])), await new Promise((_0x199725, _0x50b302) => {
    var _0x2e043b = _0x2ad10f,
      _0x931398 = {
        "VZzwZ": function (_0x2c0070, _0x5b49f6) {
          return _0x2c0070 === _0x5b49f6;
        },
        "mNXCh": "TfxEQ",
        "tJTVX": function (_0xa408ab, _0xdae364, _0xe50747) {
          var _0x401b6a = _0x4ef1;
          return _0x40b37d[_0x401b6a(383, "nL#g")](_0xa408ab, _0xdae364, _0xe50747);
        }
      };
    axios[_0x2e043b(697, "qq^H")](_0x40b37d[_0x2e043b(443, "guWD")](_0x2e043b(592, "0tEG") + Host, _0x40b37d[_0x2e043b(408, "N%Ca")]), {
      "headers": {
        "Authorization": userList[_0x2e447f]["cookie"],
        "User-Agent": _0x40b37d[_0x2e043b(519, "nTH!")](_0x40b37d[_0x2e043b(262, "Ffvt")](UserAgentStart, _0x2e447f), UserAgentStop),
        "Origin": mainHost,
        "Referer": _0x40b37d["ihITh"](mainHost, "/")
      }
    })[_0x2e043b(471, "f3SM")](function (_0xed214d) {
      var _0x230afc = _0x2e043b,
        _0x2d10b9 = {
          "DUvvI": function (_0x2337f4, _0x5a93e9) {
            return _0x2337f4(_0x5a93e9);
          }
        };
      if (_0x40b37d[_0x230afc(459, "Fiw]")](_0xed214d["status"], 200)) {
        _0x40b37d["zfzvV"](consoleError, _0x230afc(285, "RVZ1") + _0xed214d["status"]);
        return;
      }
      var _0x18c578 = _0xed214d[_0x230afc(381, "RnF*")];
      console[_0x230afc(397, "cV6b")](_0x40b37d[_0x230afc(460, "a$VV")](_0x40b37d[_0x230afc(466, "OOEW")](_0x40b37d[_0x230afc(544, "gzrz")]("\u3010", userList[_0x2e447f][_0x230afc(631, "%6DH")]), "\u3011"), _0x18c578[_0x230afc(266, "0RCZ")])), _0x40b37d[_0x230afc(394, "0kb1")](setTimeout, () => {
        var _0x58684f = _0x230afc;
        _0x931398["VZzwZ"](_0x931398[_0x58684f(419, "zt)C")], _0x58684f(451, "y[Pi")) ? _0x2d10b9[_0x58684f(477, "vrIu")](_0x3821b7, _0x5babc3) : _0x931398[_0x58684f(462, "gzrz")](getUserInfoApi, _0x2e447f, _0x219524);
      }, 1600);
    })["catch"](_0x5c141a => {
      var _0x3c504a = _0x2e043b;
      _0x40b37d["UwPan"](_0x40b37d[_0x3c504a(624, "npgN")], _0x40b37d[_0x3c504a(566, "sWdB")]) ? (_0x40b37d["zfzvV"](consoleLog, _0x40b37d[_0x3c504a(664, "H$d6")]), _0x40b37d[_0x3c504a(554, "5huW")](setTimeout, () => {
        getNext(_0x2e447f);
      }, 1200)) : _0x931398[_0x3c504a(552, "a$VV")](_0x174e20, _0x4c17a5, ![]);
    });
  });
}
async function getUserInfoApi(_0x189fdb, _0x42758c) {
  var _0x29f51c = _0x2977dd,
    _0x491643 = {
      "iXTJr": function (_0x1c24d5, _0x440bbc) {
        return _0x1c24d5 != _0x440bbc;
      },
      "tPOaD": function (_0xc5ce9c, _0x494a50) {
        return _0xc5ce9c(_0x494a50);
      },
      "COJCJ": function (_0x4d49fd, _0x43601c) {
        return _0x4d49fd + _0x43601c;
      },
      "QuEki": _0x29f51c(276, "RnF*"),
      "hpiml": function (_0x4cb79f, _0x34c634) {
        return _0x4cb79f + _0x34c634;
      },
      "wrFuX": "\u5F53\u524D\u91D1\u5E01:",
      "hYlvW": function (_0x2e5c94, _0x13f562) {
        return _0x2e5c94 == _0x13f562;
      },
      "xdkNc": function (_0x59b41a, _0x43a5d5) {
        return _0x59b41a == _0x43a5d5;
      },
      "QZjpB": _0x29f51c(583, "f3SM"),
      "nUott": _0x29f51c(527, "Jtqx"),
      "VgIWj": function (_0x1b1f7c, _0xd552b4) {
        return _0x1b1f7c(_0xd552b4);
      },
      "EUzrs": function (_0x1e70aa, _0x194174) {
        return _0x1e70aa(_0x194174);
      },
      "qigkx": function (_0x52773b, _0x421526) {
        return _0x52773b === _0x421526;
      },
      "LKHDN": function (_0x5c5ba1, _0x5bb2af) {
        return _0x5c5ba1 + _0x5bb2af;
      },
      "ySttb": function (_0x381258, _0x4c62a5) {
        return _0x381258 + _0x4c62a5;
      },
      "hOkGq": "https://",
      "VrXFy": _0x29f51c(387, "f3SM")
    };
  await new Promise((_0x23f408, _0x563dab) => {
    var _0x4b7e4f = _0x29f51c,
      _0x35dff2 = {
        "LvKyn": function (_0x3e4c7b, _0x51309e, _0x1bea32) {
          return _0x3e4c7b(_0x51309e, _0x1bea32);
        },
        "YdXoB": function (_0x243812, _0x206eab) {
          return _0x491643["EUzrs"](_0x243812, _0x206eab);
        },
        "idwBM": _0x4b7e4f(275, "%6DH")
      };
    _0x491643[_0x4b7e4f(505, "6^P$")]("dGOKv", _0x4b7e4f(593, "Coh2")) ? _0x35dff2[_0x4b7e4f(587, "Coh2")](_0x3f3b58, _0x1bf92a, ![]) : axios[_0x4b7e4f(436, "j@Sd")](_0x491643["LKHDN"](_0x491643["ySttb"](_0x491643[_0x4b7e4f(448, "RnF*")], Host), _0x491643[_0x4b7e4f(233, "s1%L")]), {
      "headers": {
        "Authorization": userList[_0x189fdb][_0x4b7e4f(213, "^y7n")],
        "User-Agent": _0x491643[_0x4b7e4f(659, "vCp@")](UserAgentStart + _0x189fdb, UserAgentStop),
        "Origin": mainHost,
        "Referer": mainHost + "/"
      }
    })[_0x4b7e4f(656, "Jtqx")](function (_0x531d61) {
      var _0x595e66 = _0x4b7e4f,
        _0x535761 = {
          "OntwN": function (_0x4393a2, _0x5a2984) {
            return _0x4393a2(_0x5a2984);
          }
        };
      if (_0x491643["iXTJr"](_0x531d61[_0x595e66(713, "c%Ln")], 200)) {
        _0x491643[_0x595e66(385, "y[Pi")](consoleError, _0x491643[_0x595e66(271, "N%Ca")](_0x491643[_0x595e66(239, "%6DH")], _0x531d61[_0x595e66(245, "sWdB")]));
        return;
      }
      var _0x42a04c = _0x531d61[_0x595e66(309, "uZW8")];
      userList[_0x189fdb]["balance"] = _0x42a04c[_0x595e66(382, "guWD")][_0x595e66(237, "s1%L")];
      var _0x28a1c6 = userList[_0x189fdb]["balance"] >= 1000;
      _0x491643["tPOaD"](consoleLog, _0x491643["hpiml"](_0x491643[_0x595e66(597, "Coh2")], userList[_0x189fdb][_0x595e66(580, "0RCZ")]));
      if (_0x28a1c6 && (_0x491643["hYlvW"](withdrawIndex, 1) || _0x491643["xdkNc"](withdrawIndex, 2) && _0x42758c)) {
        if (_0x491643["QZjpB"] === _0x491643[_0x595e66(282, "kV0H")]) _0x535761[_0x595e66(702, "5huW")](_0xa10d57, _0x48cc9d);else {
          console[_0x595e66(492, "kV0H")](_0x595e66(320, "nTH!")), _0x491643["tPOaD"](withdraw, _0x189fdb);
          return;
        }
      }
      getNext(_0x189fdb), _0x491643[_0x595e66(302, "e(iB")](_0x23f408, _0x531d61);
    })[_0x4b7e4f(521, "6Q](")](_0x20cce4 => {
      var _0x1df4a4 = _0x4b7e4f;
      _0x35dff2["YdXoB"](consoleLog, _0x35dff2[_0x1df4a4(225, "5huW")]), _0x35dff2[_0x1df4a4(356, "!4RM")](setTimeout, () => {
        var _0x2047e9 = _0x1df4a4;
        _0x35dff2[_0x2047e9(667, "vrIu")](getNext, _0x189fdb);
      }, 1200);
    });
  });
}
async function withdraw(_0x1a0975) {
  var _0x273595 = _0x2977dd,
    _0x346f3c = {
      "KCpYP": function (_0x42fea6, _0x227b6c) {
        return _0x42fea6 !== _0x227b6c;
      },
      "biAxE": _0x273595(590, "TOe7"),
      "UdSsz": function (_0x3155b9, _0x1528fc) {
        return _0x3155b9 != _0x1528fc;
      },
      "nItDQ": _0x273595(280, "^y7n"),
      "EEiwo": function (_0x3c6c5a, _0x1fd1c1) {
        return _0x3c6c5a + _0x1fd1c1;
      },
      "Wjxzd": function (_0x59e5d8, _0x17a439, _0x563b01) {
        return _0x59e5d8(_0x17a439, _0x563b01);
      },
      "iVmfh": function (_0x36e19a, _0x57e1a4) {
        return _0x36e19a(_0x57e1a4);
      },
      "tzsAl": _0x273595(556, "%Qi0"),
      "PNjWO": function (_0x5ac5db, _0x1ca084, _0x356447) {
        return _0x5ac5db(_0x1ca084, _0x356447);
      },
      "HDBYs": _0x273595(475, ")k7T"),
      "IMKna": function (_0x165b32, _0x496e31) {
        return _0x165b32 + _0x496e31;
      },
      "fZtOv": _0x273595(715, "nTH!"),
      "TxmZZ": _0x273595(682, "OOEW")
    };
  await new Promise((_0x1d4296, _0x4b0c7d) => {
    var _0x19eddc = _0x273595,
      _0x28ac79 = {
        "zfvNp": function (_0x56e37d, _0x5eb653) {
          return _0x56e37d + _0x5eb653;
        },
        "rVppo": function (_0x5e1230, _0x255bd6) {
          return _0x5e1230 + _0x255bd6;
        },
        "DRvQw": function (_0x124578, _0x2bb819) {
          var _0x522856 = _0x4ef1;
          return _0x346f3c[_0x522856(208, "OOEW")](_0x124578, _0x2bb819);
        },
        "YwbLB": function (_0x250f03, _0xed6683) {
          return _0x250f03 === _0xed6683;
        },
        "ZkKSx": function (_0x1de6b7, _0x219995) {
          return _0x1de6b7(_0x219995);
        }
      };
    axios["post"](_0x346f3c[_0x19eddc(305, "H$d6")](_0x346f3c[_0x19eddc(439, "RnF*")](_0x346f3c[_0x19eddc(396, "0kb1")], Host), _0x346f3c[_0x19eddc(507, "cV6b")]), {}, {
      "headers": {
        "Authorization": userList[_0x1a0975]["cookie"],
        "User-Agent": _0x346f3c[_0x19eddc(533, "g%b[")](UserAgentStart, _0x1a0975) + UserAgentStop,
        "Origin": mainHost,
        "Referer": _0x346f3c["EEiwo"](mainHost, "/")
      }
    })[_0x19eddc(322, "gzrz")](function (_0x265a51) {
      var _0x454818 = _0x19eddc;
      if (_0x346f3c[_0x454818(688, "vCp@")](_0x454818(522, "D]vT"), _0x346f3c[_0x454818(450, "cV6b")])) {
        if (_0x346f3c["UdSsz"](_0x265a51[_0x454818(693, ")k7T")], 200)) {
          consoleError(_0x346f3c[_0x454818(420, "guWD")] + _0x265a51["status"]);
          return;
        }
        var _0x20ed6d = _0x265a51["data"];
        consoleLog(_0x346f3c["EEiwo"](_0x346f3c[_0x454818(455, "EeCF")]("\u3010" + userList[_0x1a0975]["uName"], "\u3011"), _0x20ed6d[_0x454818(714, "j@Sd")])), _0x346f3c["Wjxzd"](setTimeout, () => {
          getNext(_0x1a0975);
        }, 1200);
      } else _0x1af557[_0x454818(595, "$Za1")](_0xc2ba67), _0x21db08 = _0x28ac79["zfvNp"](_0x28ac79["rVppo"](_0x1ed0df, _0x1d5dd7), "\n");
    })[_0x19eddc(545, "f3SM")](_0x455bb3 => {
      var _0x4c501c = _0x19eddc,
        _0x39899a = {
          "UpysN": function (_0xe50c6d, _0x3ad02b) {
            return _0x346f3c["iVmfh"](_0xe50c6d, _0x3ad02b);
          },
          "xfoPR": _0x346f3c["tzsAl"],
          "vvzIu": function (_0x384209, _0x275452, _0xc63520) {
            var _0xb7b036 = _0x4ef1;
            return _0x346f3c[_0xb7b036(354, "sWdB")](_0x384209, _0x275452, _0xc63520);
          }
        };
      _0x346f3c[_0x4c501c(524, "3w4m")](consoleLog, _0x346f3c[_0x4c501c(263, "s1%L")]), setTimeout(() => {
        var _0x221bcd = _0x4c501c,
          _0x53ab80 = {
            "UHarC": function (_0x20b1ca, _0x32bf9e) {
              var _0x59c597 = _0x4ef1;
              return _0x28ac79[_0x59c597(293, "g%b[")](_0x20b1ca, _0x32bf9e);
            }
          };
        _0x28ac79[_0x221bcd(499, "a$VV")](_0x221bcd(345, "gzrz"), _0x221bcd(600, "nTH!")) ? (_0x39899a[_0x221bcd(274, "!4RM")](_0x10949e, _0x39899a["xfoPR"]), _0x39899a[_0x221bcd(211, "gzrz")](_0x4da510, () => {
          var _0xc6b335 = _0x221bcd;
          _0x53ab80[_0xc6b335(424, "Jtqx")](_0x4821cd, _0x49ef70);
        }, 1200)) : _0x28ac79[_0x221bcd(467, "^y7n")](getNext, _0x1a0975);
      }, 1200);
    });
  });
}
function consoleLog(_0x303945) {
  var _0x255e7e = _0x2977dd,
    _0x3a8522 = {
      "YYkHW": function (_0x487fc8, _0x54eaa1) {
        return _0x487fc8 + _0x54eaa1;
      },
      "wuqwh": function (_0x1b9840, _0x4b036a) {
        return _0x1b9840 + _0x4b036a;
      }
    };
  console["log"](_0x303945), log = _0x3a8522["YYkHW"](_0x3a8522[_0x255e7e(384, "$Za1")](log, _0x303945), "\n");
}
function _0x4ef1(_0x5ea97c, _0x2f14ea) {
  var _0x222d36 = _0x222d();
  return _0x4ef1 = function (_0x4ef179, _0xf975bd) {
    _0x4ef179 = _0x4ef179 - 203;
    var _0x31950c = _0x222d36[_0x4ef179];
    if (_0x4ef1["ENcuIJ"] === undefined) {
      var _0x423a44 = function (_0xe4431e) {
        var _0x535284 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var _0x49686a = "",
          _0x5226ba = "";
        for (var _0x12d19f = 0, _0x32ab53, _0x4836a0, _0x2a424c = 0; _0x4836a0 = _0xe4431e["charAt"](_0x2a424c++); ~_0x4836a0 && (_0x32ab53 = _0x12d19f % 4 ? _0x32ab53 * 64 + _0x4836a0 : _0x4836a0, _0x12d19f++ % 4) ? _0x49686a += String["fromCharCode"](255 & _0x32ab53 >> (-2 * _0x12d19f & 6)) : 0) {
          _0x4836a0 = _0x535284["indexOf"](_0x4836a0);
        }
        for (var _0x58f912 = 0, _0xfb0ad9 = _0x49686a["length"]; _0x58f912 < _0xfb0ad9; _0x58f912++) {
          _0x5226ba += "%" + ("00" + _0x49686a["charCodeAt"](_0x58f912)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x5226ba);
      };
      var _0x870f58 = function (_0x3c854c, _0x261022) {
        var _0x32ecfd = [],
          _0x3e1ece = 0,
          _0xe699f7,
          _0xef6ad9 = "";
        _0x3c854c = _0x423a44(_0x3c854c);
        var _0xca3474;
        for (_0xca3474 = 0; _0xca3474 < 256; _0xca3474++) {
          _0x32ecfd[_0xca3474] = _0xca3474;
        }
        for (_0xca3474 = 0; _0xca3474 < 256; _0xca3474++) {
          _0x3e1ece = (_0x3e1ece + _0x32ecfd[_0xca3474] + _0x261022["charCodeAt"](_0xca3474 % _0x261022["length"])) % 256, _0xe699f7 = _0x32ecfd[_0xca3474], _0x32ecfd[_0xca3474] = _0x32ecfd[_0x3e1ece], _0x32ecfd[_0x3e1ece] = _0xe699f7;
        }
        _0xca3474 = 0, _0x3e1ece = 0;
        for (var _0x5d1ca5 = 0; _0x5d1ca5 < _0x3c854c["length"]; _0x5d1ca5++) {
          _0xca3474 = (_0xca3474 + 1) % 256, _0x3e1ece = (_0x3e1ece + _0x32ecfd[_0xca3474]) % 256, _0xe699f7 = _0x32ecfd[_0xca3474], _0x32ecfd[_0xca3474] = _0x32ecfd[_0x3e1ece], _0x32ecfd[_0x3e1ece] = _0xe699f7, _0xef6ad9 += String["fromCharCode"](_0x3c854c["charCodeAt"](_0x5d1ca5) ^ _0x32ecfd[(_0x32ecfd[_0xca3474] + _0x32ecfd[_0x3e1ece]) % 256]);
        }
        return _0xef6ad9;
      };
      _0x4ef1["rvcSkD"] = _0x870f58, _0x5ea97c = arguments, _0x4ef1["ENcuIJ"] = !![];
    }
    var _0x5b2e7a = _0x222d36[0],
      _0x29aa7b = _0x4ef179 + _0x5b2e7a,
      _0x350769 = _0x5ea97c[_0x29aa7b];
    return !_0x350769 ? (_0x4ef1["jJbtqM"] === undefined && (_0x4ef1["jJbtqM"] = !![]), _0x31950c = _0x4ef1["rvcSkD"](_0x31950c, _0xf975bd), _0x5ea97c[_0x29aa7b] = _0x31950c) : _0x31950c = _0x350769, _0x31950c;
  }, _0x4ef1(_0x5ea97c, _0x2f14ea);
}
function consoleError(_0x413763, _0x5cfddd) {
  var _0x3fd127 = _0x2977dd,
    _0x6b1eff = {
      "ooGZw": function (_0x99122e, _0x3631ff) {
        return _0x99122e(_0x3631ff);
      },
      "RJPUT": "\u83B7\u53D6\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u53F0\u5B50\u5D29\u4E86",
      "wMhFE": function (_0x125976, _0x2dc494, _0x442177) {
        return _0x125976(_0x2dc494, _0x442177);
      },
      "csVcx": function (_0x361615, _0x3baa99, _0x5759df) {
        return _0x361615(_0x3baa99, _0x5759df);
      },
      "JAHbR": function (_0xc10157, _0x2431c1) {
        return _0xc10157 + _0x2431c1;
      },
      "WvKTJ": function (_0x4f0f2f, _0x57a781) {
        return _0x4f0f2f + _0x57a781;
      },
      "WYUXQ": _0x3fd127(337, "RVZ1"),
      "LlGZX": _0x3fd127(339, "gzrz"),
      "yNKNH": function (_0x1fb568, _0x37caa0) {
        return _0x1fb568 + _0x37caa0;
      },
      "JfWGv": _0x3fd127(541, "Coh2"),
      "KvSak": function (_0x36dda2, _0x925478) {
        return _0x36dda2 + _0x925478;
      },
      "jZpIu": function (_0x2b6548, _0x2f000b) {
        return _0x2b6548 + _0x2f000b;
      },
      "adjWD": _0x3fd127(537, "j@Sd"),
      "SGMjf": function (_0x318797, _0x506b18) {
        return _0x318797 === _0x506b18;
      },
      "QDCMG": "AmpVt",
      "SfomW": "kEMdB",
      "hCMwV": function (_0x15943a, _0x3e5339) {
        return _0x15943a(_0x3e5339);
      },
      "ENlEf": "\u6CA1\u8FD0\u884C\uFF0C\u5C31\u4E0D\u53D1\u901A\u77E5\u4E86",
      "PKqLP": _0x3fd127(648, "gzrz")
    };
  console[_0x3fd127(685, ")k7T")](_0x413763), log = _0x6b1eff["KvSak"](_0x6b1eff["jZpIu"](log, _0x413763), "\n");
  if (_0x5cfddd && !isRun) {
    if (_0x6b1eff[_0x3fd127(549, "JE6J")](_0x6b1eff[_0x3fd127(273, "H$d6")], _0x6b1eff[_0x3fd127(314, "^y7n")])) {
      var _0x208862 = {
        "fGlFg": function (_0x5426ed, _0x20de59, _0x4095dd) {
          var _0x47ea62 = _0x3fd127;
          return _0x6b1eff[_0x47ea62(311, "5huW")](_0x5426ed, _0x20de59, _0x4095dd);
        }
      };
      _0x21af02[_0x3fd127(638, "Fiw]")](_0x6b1eff["JAHbR"](_0x6b1eff[_0x3fd127(642, "0kb1")](_0x6b1eff[_0x3fd127(341, "0RCZ")], _0x1871de), _0x6b1eff[_0x3fd127(654, "sWdB")]), {
        "readKey": _0x345cd8[_0x5536e0][_0x3fd127(364, "0tEG")],
        "taskKey": _0x37fa20[_0x4ed5e8][_0x3fd127(348, "qq^H")]
      }, {
        "headers": {
          "Authorization": _0x157e61[_0x16ddf1][_0x3fd127(503, "!4RM")],
          "User-Agent": _0x6b1eff[_0x3fd127(358, "Coh2")](_0xa4de53, _0x5a554d) + _0x3360be,
          "Origin": _0x6b1eff[_0x3fd127(596, "sWdB")] + _0x4f8333[_0x1ba6ab][_0x3fd127(294, "OOEW")],
          "Referer": _0x6b1eff[_0x3fd127(465, "EeCF")](_0x6b1eff["jZpIu"](_0x3fd127(344, "6^P$"), _0x364f7e[_0x10082e]["readAdmin"]), "/"),
          "content-type": _0x6b1eff[_0x3fd127(694, "gzrz")]
        }
      })["then"](function (_0x54a191) {
        _0x208862["fGlFg"](_0x3cb10b, _0x53deff, _0x54a191);
      })[_0x3fd127(206, "c%Ln")](_0x1f2edc => {
        var _0x2ba697 = _0x3fd127,
          _0x3a42fb = {
            "nrXqp": function (_0x2f41ee, _0xde183f) {
              return _0x2f41ee(_0xde183f);
            }
          };
        _0x6b1eff[_0x2ba697(441, "y[Pi")](_0x3b51b1, _0x6b1eff[_0x2ba697(440, "!4RM")]), _0x6b1eff[_0x2ba697(307, "RVZ1")](_0x4d4a68, () => {
          var _0x5afa95 = _0x2ba697;
          _0x3a42fb[_0x5afa95(229, "$Za1")](_0x42f8f3, _0x409e84);
        }, 1200);
      });
    } else {
      _0x6b1eff["hCMwV"](consoleLog, _0x6b1eff[_0x3fd127(628, "nL#g")]);
      return;
    }
  }
  notify["sendNotify"](_0x6b1eff[_0x3fd127(591, "g%b[")] + ckKey, log);
}
function getUnix() {
  var _0x37ebd5 = _0x2977dd,
    _0x2053fd = {
      "aQrJd": function (_0xcb5980, _0x2bf3ba) {
        return _0xcb5980(_0x2bf3ba);
      }
    };
  return _0x2053fd[_0x37ebd5(506, "s1%L")](parseInt, new Date()["getTime"]() / 1000);
}
function getQueryVariable(_0x3fdce6, _0x143b8e) {
  var _0x2cffec = _0x2977dd,
    _0x4cb160 = {
      "ngdXC": function (_0x567dc4, _0x31f004) {
        return _0x567dc4 + _0x31f004;
      },
      "bwQEA": function (_0x3126a8, _0x33b805) {
        return _0x3126a8 == _0x33b805;
      },
      "WHHsk": function (_0x5097b7, _0x4ae9e7) {
        return _0x5097b7 === _0x4ae9e7;
      },
      "fimEo": _0x2cffec(222, "Fiw]")
    };
  _0x3fdce6 = _0x3fdce6["slice"](_0x4cb160["ngdXC"](_0x3fdce6[_0x2cffec(247, "vCp@")]("?"), 1));
  var _0x5e20b1 = _0x3fdce6[_0x2cffec(386, "RnF*")]("&");
  for (var _0x527425 = 0; _0x527425 < _0x5e20b1["length"]; _0x527425++) {
    var _0x327a6d = _0x5e20b1[_0x527425]["slice"](0, _0x5e20b1[_0x527425][_0x2cffec(418, "j@Sd")]("="));
    if (_0x4cb160[_0x2cffec(543, "!4RM")](_0x327a6d, _0x143b8e)) {
      if (_0x4cb160["WHHsk"](_0x4cb160[_0x2cffec(300, "Jtqx")], _0x4cb160["fimEo"])) return _0x5e20b1[_0x527425]["slice"](_0x4cb160[_0x2cffec(520, "0tEG")](_0x327a6d[_0x2cffec(315, "EeCF")], 1));else _0xd7c605 = _0xf2f515(_0x3edd92[_0x2cffec(495, "0tEG")][_0x2cffec(319, "!4RM")]);
    }
  }
  return ![];
}
var version_ = "jsjiami.com.v7";