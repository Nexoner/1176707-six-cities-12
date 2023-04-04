export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Rooms = '/offer/:id',
    Error = '/error'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
