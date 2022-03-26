import { KeycloakService } from "keycloak-angular";

/**
 * Define constante de funcao para acessar o keycloak service
 * @param keycloak
 * @returns
 */
export const initializeKeycloak = function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'happybeer',
        clientId: 'happybeer-id'
      },
      initOptions: {
        onLoad: 'login-required',
        //onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      /*loadUserProfileAtStartUp: true,*/
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: [
        '/assets',
        '/clients/public']
    });
}
