
import { useState } from 'react';
import { Button, Rating, Tag } from '../components';

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <h2 className="heading">Header2</h2>
      <p className='text'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</p>
      <h1 className="heading heading--large">Header2</h1>
      <p className='text text--large'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</p>
      <h3 className="heading heading--small">Header2</h3>
      <p className='text text--small'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</p>
      <Button appearance='primary' arrow="right">Primary</Button>
      <Button appearance='ghost' arrow="down">Ghost</Button>
      <Tag size="l" color="red">hh.ru</Tag>
      <Tag color="ghost">hh.ru</Tag>
      <Tag size="s" href="#" color="green">hh.ru</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
