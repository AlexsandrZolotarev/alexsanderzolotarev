import { useLang } from '@/hooks/useLang';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { FilePickerPreview } from '../FilePickerPreview/FilePickerPreview';
import { useAppReady } from '@/hooks/useAppReady';
import { useAppSelector } from '@/Redux/hooks';

type Service = 'landing' | 'corporate' | 'ecommerce' | 'support';

type FormState = {
  services: Service[];
  pages: '1-3' | '4-7' | '8+';
  hasTz: 'yes' | 'no';
  deadline: 'asap' | '1-2w' | 'not_urgent';
  name: string;
  contact: string;
  message: string;
  files: File[];
};

const initial: FormState = {
  services: [],
  pages: '1-3',
  hasTz: 'no',
  deadline: '1-2w',
  name: '',
  contact: '',
  message: '',
  files: [],
};

function StepDot({ done, active, label }: { done: boolean; active: boolean; label: string }) {
  const cls = ['msq__step', done ? 'is-done' : '', active ? 'is-active' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      <div className="msq__step-dot" aria-hidden="true" />
      <div className="msq__step-label">{label}</div>
    </div>
  );
}

function StepLine({ done, active }: { done: boolean; active: boolean }) {
  const cls = ['msq__line', done ? 'is-done' : '', active ? 'is-active' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className="msq__stripe" aria-hidden="true">
      <div className={cls} aria-hidden="true" />
    </div>
  );
}

export function MultiStepQuoteForm() {
  const { translate } = useLang();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);

  const step1Valid = data.services.length > 0;
  const step2Valid = !!data.name.trim() && !!data.contact.trim();
  const step3Valid = true;

  const canNext = useMemo(() => {
    if (step === 1) return step1Valid;
    if (step === 2) return step2Valid;
    return step3Valid;
  }, [step, step1Valid, step2Valid, step3Valid]);

  const toggleService = (s: Service) => {
    setData((p) => {
      const exists = p.services.includes(s);
      return { ...p, services: exists ? p.services.filter((x) => x !== s) : [...p.services, s] };
    });
  };

  const submit = async () => {
    try {
      setLoading(true);

      const form = new FormData();

      form.append(
        'data',
        JSON.stringify({
          services: data.services,
          pages: data.pages,
          deadline: data.deadline,
          hasTz: data.hasTz,
          name: data.name,
          contact: data.contact,
          message: data.message,
          url: window.location.href,
          ua: navigator.userAgent,
          createdAt: new Date().toISOString(),
        }),
      );

      data.files.forEach((file) => {
        form.append('files', file);
      });

      const res = await fetch('/api/lead', {
        method: 'POST',
        body: form, // ⬅️ ВАЖНО: без headers
      });

      if (!res.ok) throw new Error('Send failed');

      toast(translate('quote.toast.successTitle'), {
        description: translate('quote.toast.successDesc'),
        duration: 6000,
      });

      setData(initial);
      setStep(1);
    } catch {
      toast(translate('quote.toast.errorTitle'), {
        description: translate('quote.toast.errorDesc'),
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  const onPrev = () => setStep((s) => (s === 2 ? 1 : 2));
  const onNext = () => setStep((s) => (s === 1 ? 2 : 3));

  const serviceCards: Array<{ key: Service }> = [
    { key: 'landing' },
    { key: 'corporate' },
    { key: 'ecommerce' },
    { key: 'support' },
  ];
  const { appReady } = useAppReady();
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  return (
    <section
      className={`msq ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
      aria-label={translate('quote.title')}
    >
      <div className="msq__card">
        <header
          className={`msq__header ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <div className="msq__header-left">
            <h2 className="msq__title">{translate('quote.title')}</h2>
            <p className="msq__subtitle">{translate('quote.subtitle')}</p>
          </div>
        </header>

        <div
          className={`msq__progress ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
          role="list"
          aria-label="Steps"
        >
          <StepDot done={step1Valid} active={step === 1} label={translate('quote.steps.service')} />
          <StepLine done={step >= 2} active={step === 2} />
          <StepDot
            done={step2Valid}
            active={step === 2}
            label={translate('quote.steps.contacts')}
          />
          <StepLine done={step >= 3} active={step === 3} />
          <StepDot done={step === 3} active={step === 3} label={translate('quote.steps.details')} />
        </div>

        <div
          className={`msq__content ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          {step === 1 && (
            <>
              <h3 className="msq__h3">{translate('quote.step1.title')}</h3>
              <p className="msq__hint">{translate('quote.step1.hint')}</p>

              <div className="msq__cards">
                {serviceCards.map(({ key }) => (
                  <ServiceCard
                    key={key}
                    active={data.services.includes(key)}
                    title={translate(`quote.step1.services.${key}`)}
                    sub={translate('quote.step1.hint')}
                    onClick={() => toggleService(key)}
                  />
                ))}
              </div>

              <div className="msq__grid2">
                <FieldSelect
                  label={translate('quote.step1.pages.label')}
                  value={data.pages}
                  onChange={(v) => setData((p) => ({ ...p, pages: v as FormState['pages'] }))}
                  options={[
                    ['1-3', translate('quote.step1.pages.1-3')],
                    ['4-7', translate('quote.step1.pages.4-7')],
                    ['8+', translate('quote.step1.pages.8+')],
                  ]}
                />

                <FieldSelect
                  label={translate('quote.step1.deadline.label')}
                  value={data.deadline}
                  onChange={(v) => setData((p) => ({ ...p, deadline: v as FormState['deadline'] }))}
                  options={[
                    ['asap', translate('quote.step1.deadline.asap')],
                    ['1-2w', translate('quote.step1.deadline.1-2w')],
                    ['not_urgent', translate('quote.step1.deadline.not_urgent')],
                  ]}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="msq__h3">{translate('quote.step2.title')}</h3>
              <p className="msq__hint">{translate('quote.step2.hint')}</p>

              <div className="msq__grid2">
                <FieldInput
                  label={translate('quote.step2.name.label')}
                  value={data.name}
                  onChange={(v) => setData((p) => ({ ...p, name: v }))}
                  placeholder={translate('quote.step2.name.ph')}
                />
                <FieldInput
                  label={translate('quote.step2.contact.label')}
                  value={data.contact}
                  onChange={(v) => setData((p) => ({ ...p, contact: v }))}
                  placeholder={translate('quote.step2.contact.ph')}
                />
              </div>

              <div className="msq__grid1">
                <FieldSelect
                  label={translate('quote.step2.tz.label')}
                  value={data.hasTz}
                  onChange={(v) => setData((p) => ({ ...p, hasTz: v as FormState['hasTz'] }))}
                  options={[
                    ['yes', translate('quote.step2.tz.yes')],
                    ['no', translate('quote.step2.tz.no')],
                  ]}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="msq__h3">{translate('quote.step3.title')}</h3>
              <p className="msq__hint">{translate('quote.step3.hint')}</p>

              <FieldTextarea
                label={translate('quote.step3.message.label')}
                value={data.message}
                onChange={(v) => setData((p) => ({ ...p, message: v }))}
                placeholder={translate('quote.step3.message.ph')}
              />

              <div className="msq__upload">
                <FilePickerPreview
                  files={data.files}
                  onChange={(next) => setData((p) => ({ ...p, files: next }))}
                  onRemove={(index) =>
                    setData((p) => ({ ...p, files: p.files.filter((_, i) => i !== index) }))
                  }
                  i18n={{
                    choose: translate('quote.files.choose'),
                    count: (n) => translate('quote.files.count').replace('{n}', String(n)),
                    remove: translate('quote.files.remove'),
                  }}
                />

                <div className="msq__upload-hint">{translate('quote.step3.files.hint')}</div>
              </div>
            </>
          )}
        </div>

        <footer
          className={`msq__footer ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <button
            type="button"
            className="msq__btn msq__btn--secondary"
            disabled={step === 1 || loading}
            onClick={onPrev}
          >
            {translate('quote.buttons.prev')}
          </button>

          {step !== 3 ? (
            <button
              type="button"
              className="msq__btn msq__btn--primary"
              disabled={!canNext || loading}
              onClick={onNext}
            >
              {translate('quote.buttons.next')}
            </button>
          ) : (
            <button
              type="button"
              className="msq__btn msq__btn--primary"
              disabled={loading || !step1Valid || !step2Valid}
              onClick={submit}
            >
              {loading ? translate('quote.buttons.sending') : translate('quote.buttons.send')}
            </button>
          )}
        </footer>
      </div>
    </section>
  );
}

function ServiceCard({
  active,
  title,
  sub,
  onClick,
}: {
  active: boolean;
  title: string;
  sub: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={['msq__cardbtn', active ? 'is-active' : ''].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <div className="msq__cardbtn-title">{title}</div>
      <div className="msq__cardbtn-sub">{sub}</div>
    </button>
  );
}

function FieldInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="msq__field">
      <span className="msq__label">{label}</span>
      <input
        className="msq__control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function FieldTextarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="msq__field">
      <span className="msq__label">{label}</span>
      <textarea
        className="msq__control msq__control--textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
      />
    </label>
  );
}

export function FieldSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<[string, string]>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const selectedLabel = options.find(([v]) => v === value)?.[1];

  return (
    <label ref={ref} className={`msq__field ${open ? 'is-open' : ''}`}>
      <span className="msq__label">{label}</span>

      <button
        type="button"
        className="msq__select"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedLabel}</span>
        <i className="msq__arrow" />
      </button>

      <ul className="msq__dropdown" role="listbox">
        {options.map(([v, t]) => (
          <li
            key={v}
            role="option"
            aria-selected={value === v}
            className={value === v ? 'is-selected' : ''}
            onClick={() => {
              onChange(v);
              setOpen(false);
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </label>
  );
}
