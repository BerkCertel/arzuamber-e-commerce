function TextClip(text: string) {
  if (text.length < 20) {
    return <div>{text}</div>;
  }

  return <div>{text.substring(0, 12) + "..."}</div>;
}

export default TextClip;
