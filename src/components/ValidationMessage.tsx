const ValidationMessage = (props: { text: string }) => {
  const { text } = props;

  return <small className="block text-red-600">{text}</small>;
};

export default ValidationMessage;
