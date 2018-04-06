export const authSettings: any = {
  authority: 'https://sso.local.galadirectory.co.uk/identity/',
  client_id: 'diagnostix.WEB',
  redirect_uri: 'https://localhost:44356/auth.html',
  silent_redirect_uri: 'https://localhost:44356/silent-auth.html',
  post_logout_redirect_uri: 'https://localhost:44356/',
  response_type: 'id_token token',
  scope: 'openid profile roles',
  automaticSilentRenew: true,
  silentRequestTimeout: 5000,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
};
