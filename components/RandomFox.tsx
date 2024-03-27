// Generates a random number between 1 and 122


type Props = { image: string}

export function RandomFox({image}: Props): JSX.Element {


  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      width="320"
      height="auto"
      src={image}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}