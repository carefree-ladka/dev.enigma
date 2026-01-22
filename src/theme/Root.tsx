import React from 'react';

export default function Root({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        document.fonts.ready.then(() => {
          document.body.classList.add('fonts-loaded');
        });
      });
    }
  }, []);

  return <>{children}</>;
}
