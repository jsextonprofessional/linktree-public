interface LinkProps {
  url: string;
  title: string;
}

export const Link = (props: LinkProps) => {
  return (
    <div className="border-4 border-blue-500  text-center">
      <a href={props.title} target="_blank">
        {props.title}
      </a>
    </div>
  );
};
