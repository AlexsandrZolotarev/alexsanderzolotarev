import { useLang } from '@/hooks/useLang';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function AppToast() {
  const { translate } = useLang();
  const title = translate(`project.toast.title`);
  const description = translate(`project.toast.description`);
  const actionLabel = translate(`project.action.label`);
  useEffect(() => {
    const id = window.setTimeout(() => {
      toast(`${title}`, {
        description: `${description}`,
        action: {
          label: `${actionLabel}`,
          onClick: () => (window.location.href = '/contact'),
        },
        duration: Infinity,
      });
    }, 500);

    return () => window.clearTimeout(id);
  }, [title, description, actionLabel]);

  return null;
}
