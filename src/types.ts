export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface UserFilters {
  name?: string;
  email?: string;
  minAge?: number;
  maxAge?: number;
}