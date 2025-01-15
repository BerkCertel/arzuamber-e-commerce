interface WarningTextProps {
  title: string;
  text: string;
}

function WarningText({ title, text }: WarningTextProps) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-red-100 p-4 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-red-700 mb-4">{title}</h1>
      <p className="text-2xl text-red-600">{text}</p>
    </div>
  );
}

export default WarningText;
