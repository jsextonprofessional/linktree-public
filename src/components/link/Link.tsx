interface LinkProps {
  url: string;
  title: string;
}

export const Link = (props: LinkProps) => {
  return (
    <div>
      <h1>linkgg</h1>
      <a href={props.title}>{props.title}</a>
    </div>
  );
};
