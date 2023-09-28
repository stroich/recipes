import { parseISO, format } from 'date-fns';
import { ru, de, enUS } from 'date-fns/locale';

export const DateFormatter = ({ dateString = new Date(), locale = 'de' }) => {
  const date = parseISO(dateString);

  const localesMap = {
    ru: ru,
    enUS: enUS,
    de: de,
  };

  const chosenLocale = localesMap[locale] || de;

  const ariaLabel = `Posted on ${format(date, 'd LLLL, yyyy', { locale: chosenLocale })}`;
  const timeCode = format(date, 'LLLL d, yyyy', { locale: chosenLocale });

  return (
    <time dateTime={dateString} aria-label={ariaLabel}>
      {timeCode}
    </time>
  );
};

export default DateFormatter;
