
function Btn1(props: React.HTMLAttributes<HTMLButtonElement>) {


  return (
    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded" {...props}>
      <span className="font-semibold">{props.children || "Click Me"}</span>
      <span className="ml-2">👉</span>
    </button>
  );
}
export default Btn1;