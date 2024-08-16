document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const siteInput = document.getElementById('site').value.trim();
    const baseUrl = 'https://www.zerotoone.com.br/wp-content/plugins/super-links/application/helpers/super-links-proxy.php?';
    const url = siteInput ? baseUrl + encodeURIComponent(siteInput) : baseUrl + 'https://example.net';
    window.location.href = url;
});
