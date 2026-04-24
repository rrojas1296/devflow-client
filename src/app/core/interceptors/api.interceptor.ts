import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log({
    url: req.url,
  });
  if (req.url.startsWith('/i18n') || req.url.startsWith('/assets') || req.url.startsWith('http')) {
    return next(req);
  }
  if (req.url.startsWith('/api')) {
    return next(
      req.clone({
        url: `http://localhost:8000${req.url}`,
        withCredentials: true,
      }),
    );
  }

  return next(req);
};
