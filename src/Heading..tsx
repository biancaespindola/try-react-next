interface HeadingProps {
  word: string;
}

function Heading({ word }: HeadingProps) {
  return <h1>{word}</h1>;
}

export default Heading;
