import Image from 'next/image';

import wework from '../../public/assets/img/webpage/wework.jpeg';

const TestContent = () => {
  return (
    <div>
      <h1>Заголовок 1</h1>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2">
            <p>
              Это абзац текста. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
              magna vitae lacus auctor, vel pulvinar eros interdum. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nullam sagittis, velit et
              bibendum varius, dolor enim feugiat erat, eget fermentum turpis odio eu turpis. Sed
              hendrerit non risus eget malesuada. Ut egestas eget purus nec dictum. Quisque
              porttitor vitae magna sit amet volutpat.
            </p>
            <p>
              Это абзац текста. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
              magna vitae lacus auctor, vel pulvinar eros interdum. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nullam sagittis, velit et
              bibendum varius, dolor enim feugiat erat, eget fermentum turpis odio eu turpis. Sed
              hendrerit non risus eget malesuada. Ut egestas eget purus nec dictum. Quisque
              porttitor vitae magna sit amet volutpat.
            </p>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <Image
              src={wework}
              alt="Logo"
              className="w-full rounded-img"
              style={{
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </div>
      <h2>Заголовок 2</h2>
      <ul className="list-disc my-4 ml-8">
        <li>Элемент списка 1</li>
        <li>Элемент списка 2</li>
        <li>Элемент списка 3</li>
      </ul>
      <h3>Заголовок 3</h3>
      <ol className="my-4 ml-8 list-decimal">
        <li>Элемент упорядоченного списка 1</li>
        <li>Элемент упорядоченного списка 2</li>
        <li>Элемент упорядоченного списка 3</li>
      </ol>
      <h4>Заголовок 4</h4>
      <h5>Заголовок 5</h5>
      <h6>Заголовок 6</h6>
      <section>
        <h3>Секция</h3>
        <p>
          Это секция с примененными стилями. Phasellus nec nisi ex. Nulla facilisi. Curabitur eget
          euismod lectus. Duis ut orci dui. Nam hendrerit lectus sed volutpat pellentesque. Nullam
          facilisis mi in urna tincidunt, vitae luctus dolor facilisis. Integer in odio scelerisque,
          interdum nisi nec, fringilla est.
        </p>
      </section>
      <article>
        <h3>Статья</h3>
        <p>
          Это статья с примененными стилями. Etiam nec massa ex. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Cras sed turpis purus. Fusce
          volutpat auctor scelerisque. Donec eu eros sit amet erat viverra volutpat in id ipsum.
          Proin vulputate magna id neque faucibus, non venenatis sem accumsan. Ut ut rhoncus tortor.
        </p>
      </article>
      <blockquote>
        <p>Это цитата.</p>
        <footer>Автор цитаты</footer>
      </blockquote>
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder Image"
        className="my-4 rounded-md border-2 border-gray-300 p-1"
      />
      <p>
        Еще один абзац текста. Vestibulum et bibendum elit. Vivamus elementum nulla a volutpat
        mollis. In ac metus non orci malesuada egestas a nec arcu. Nulla facilisi. Nullam viverra
        ultrices nulla, et scelerisque mi fermentum id.
      </p>
    </div>
  );
};

export default TestContent;
