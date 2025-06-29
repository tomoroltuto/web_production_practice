document.addEventListener('DOMContentLoaded', function() {
  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.right = '0';
  banner.style.backgroundColor = '#4a90e2';
  banner.style.color = 'white';
  banner.style.textAlign = 'center';
  banner.style.padding = '10px';
  banner.style.zIndex = '1000';
  banner.style.fontSize = '14px';
  banner.innerHTML = 'PR #6 プレビュー環境 | <a href="https://github.com/tomoroltuto/web_production_practice/pull/6" style="color: white; text-decoration: underline;">PRを表示</a>';
  document.body.insertBefore(banner, document.body.firstChild);
  document.body.style.paddingTop = (banner.offsetHeight) + 'px';
});
