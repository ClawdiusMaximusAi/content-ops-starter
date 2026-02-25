exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {'Content-Type':'text/html'},
    body: `<!doctype html><html><head><meta charset="utf-8"><title>Mission Control</title></head><body>
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  netlifyIdentity && netlifyIdentity.init();
  var u = netlifyIdentity && netlifyIdentity.currentUser();
  if(!u){ netlifyIdentity.open('login'); netlifyIdentity.on('login', ()=>location.reload()); }
</script>
</body></html>`
  }
}
