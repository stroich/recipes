import { parseISO, format } from 'date-fns';
import { ru, de, enUS } from 'date-fns/locale';

export const DateFormatter = (props) => {
  const { dateString = new Date(), locale = 'de' } = props;
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

  const ariaLabel = `Posted on ${format(date, 'd LLLL, yyyy', { chosenLocale })}`;
  const timeCode = format(date, 'LLLL d, yyyy', { chosenLocale });

  return (
    <time
      dateTime={dateString}
      /*   className="px-2 my1 text-gray-500 text-sm  border-2 border-gray-500 rounded-md"*/
      aria-label={ariaLabel}
    >
      {timeCode}
    </time>
  );
};

export default DateFormatter;
