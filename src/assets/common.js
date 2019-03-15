//设置cookie
let setCookie = (name, value) => {
  let Days = 365;
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
let getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) return unescape(arr[2]);
  else return null;
}
// 获取参数
let getParams = (name) => {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
        location.href
      ) || [, ""])[1].replace(/\+/g, "%20")
    ) || null
  );
}
function throttle(method, params) {
  clearTimeout(method.tId);
//   console.log(context)
  method.tId = setTimeout(function () {
    method(params);
  }, 500);
}
export {
  setCookie,
  getCookie,
  getParams,
  throttle
}
