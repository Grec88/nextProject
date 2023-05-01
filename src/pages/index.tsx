
import { useState } from 'react';
import { Button, Rating, Tag } from '../components';
import { withLayout } from '../layout/layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../../Interfaces/menu.interface';

const Home = ({menu}: HomeProps) => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <h2 className="heading">Header2</h2>
      <p className='text'>Студенты освоят </p>
      <h1 className="heading heading--large">Header2</h1>
      <p className='text text--large'>Выше </p>
      <h3 className="heading heading--small">Header2</h3>
      <p className='text text--small'>Напишу </p>
      <Button appearance='primary' arrow="right">Primary</Button>
      <Button appearance='ghost' arrow="down">Ghost</Button>
      <Tag size="l" color="red">hh.ru</Tag>
      <Tag color="ghost">hh.ru</Tag>
      <Tag size="s" href="#" color="green">hh.ru</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}