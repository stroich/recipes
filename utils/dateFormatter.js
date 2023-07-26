import { parseISO, format } from 'date-fns';
import { ru, de, enUS } from 'date-fns/locale';

export const DateFormatter = (props) => {
  const { dateString, locale = 'de' } = props;
  const date = parseISO(dateString);

  let chosenLocale;
  switch (locale) {
    case 'ru':
      chosenLocale = ru;
      break;
    case 'enUS':
      chosenLocale = enUS;
      break;
    default:
      chosenLocale = undefined;
  }

  return (
    <time dateTime={dateString} className="px-2 my1 text-gray-500 text-sm">
      {format(date, 'd LLLL, yyyy', { locale: chosenLocale })}
    </time>
  );
};

export default DateFormatter;
