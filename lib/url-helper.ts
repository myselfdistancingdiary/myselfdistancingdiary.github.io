export default function createLoginUrl(redirectTo:string|undefined|null) {
    if (redirectTo) {
      return `/api/login?redirectTo=${encodeURIComponent(redirectTo)}`;
    }
    return `/api/login`;
  }