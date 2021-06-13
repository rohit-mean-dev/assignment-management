export interface RegisterRequest {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginRequest {
  password: string;
  email: string;
}
