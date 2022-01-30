import Item from "./Item";

export default function List({ gifs }) {

  if(!gifs.length) {
    return (<h1>There are not results</h1>)
  }

  return (
    <ul className="gify__list-images">
      {gifs.map(({ title, id, url, slug }) => {
        return <Item key={id} title={title} image={url} id={id} slug={slug} />;
      })}
    </ul>
  );
}
