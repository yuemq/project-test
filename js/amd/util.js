define(function () {
  var util = {
    getFormatDate: function (date, type) {
      if (type === 1) {
        return "2018-10-28";
      }
      if (type === 2) {
        return "2018年10月28日";
      }
    }
  };
  return util;
});