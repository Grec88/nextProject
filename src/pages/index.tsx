
import { Button } from '../components';

export default function Home() {
  return (
    <>
      <h2 className="heading">Header2</h2>
      <h1 className="heading--large">Header2</h1>
      <h3 className="heading--small">Header2</h3>
      <Button appearance='primary' arrow="right">Primary</Button>
      <Button appearance='ghost' arrow="down">Ghost</Button>
    </>
  );
}
