function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,r,a,o,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,a=r;return i=r=void 0,l=t,o=e.apply(a,n)}function h(e){return l=e,u=setTimeout(w,t),c?b(e):o}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function w(){var e=m();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,a-(e-l)):n}(e))}function O(e){return u=void 0,g&&i?b(e):(i=r=void 0,o)}function T(){var e=m(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),o}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},T.flush=function(){return void 0===u?o:O(m())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");console.log({email:t.value,message:n.value}),e.target.reset(),localStorage.clear()})),b.addEventListener("input",e(t)((function(e){e.preventDefault();const{email:t,message:n}=b,i={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(i))}),1e3)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));try{b.email.value=e.email}catch(e){b.email.value=""}try{b.message.value=e.message}catch(e){b.message.value=""}}();
//# sourceMappingURL=03-feedback.e83e557e.js.map
