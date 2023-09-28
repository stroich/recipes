import Markdown from 'markdown-to-jsx';

export const MdToHtml = ({ mdSource }) => {
  const overrides = {
    h1: { component: 'h1', props: { className: 'text-4xl font-bold my-4' } },
    h2: { component: 'h2', props: { className: 'text-2xl font-bold my-4' } },
    h3: { component: 'h3', props: { className: 'text-lg font-bold my-2' } },
    h4: { component: 'h4', props: { className: 'text-lg font-bold my-2' } },
    h5: { component: 'h5', props: { className: 'text-lg font-bold my-2' } },
    h6: { component: 'h6', props: { className: 'text-lg font-bold my-2' } },
    pre: {
      component: 'pre',
      props: { className: 'bg-gray-100 p-4 rounded-md overflow-x-auto' },
    },
    code: { component: 'code', props: { className: 'text-gray-800' } },
    div: { component: 'div', props: { className: 'mb-2' } },
    p: { component: 'p', props: { className: 'my-4' } },
    a: {
      component: 'a',
      props: {
        className: 'text-blue-500 hover:underline',
        role: 'link',
        'aria-label': 'external link',
      },
    },
    ul: { component: 'ul', props: { className: 'list-disc my-4 ml-8' } },
    ol: { component: 'ol', props: { className: 'list-decimal my-4 ml-8' } },
    li: { component: 'li', props: { className: 'my-2' } },
    img: {
      component: 'img',
      props: {
        className: 'my-4 rounded-md border-2 border-gray-300 p-1',
        alt: '',
        width: '60%',
      },
    },
    figcaption: {
      component: 'figcaption',
      props: { className: 'text-sm text-gray-500 mt-2' },
    },
  };

  return (
    <article className="bg-white shadow-md rounded-md text-gray-800 my-1 p-2">
      <Markdown options={{ overrides }}>{mdSource}</Markdown>
    </article>
  );
};
