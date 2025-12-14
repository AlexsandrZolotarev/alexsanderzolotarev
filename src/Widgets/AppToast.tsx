import { useLang } from '@/hooks/useLang';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';

export function AppToast() {
  const { pathname } = useLocation();
  const { translate } = useLang();
  const title = translate(`project.toast.title`);
  const description = translate(`project.toast.description`);
  const actionLabel = translate(`project.action.label`);
  useEffect(() => {
    if (pathname === '/contact') {
      toast.dismiss();
      return;
    }
    const id = window.setTimeout(() => {
      toast(`${title}`, {
        description: `${description}`,
        action: {
          label: `${actionLabel}`,
          onClick: () => (window.location.href = '/contact'),
        },
        duration: Infinity,
      });
    }, 10000);

    return () => window.clearTimeout(id);
  }, [title, description, actionLabel]);

  return null;
}
