
type MyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconPositionLeft?: boolean;
  icon?: React.ReactNode;
};

  function Btn1({
  iconPositionLeft = false,
  icon = <span>🔗</span>,
  children,
  ...props
}: MyButtonProps) {


  return (
    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded" {...props}>
      <span>{icon}</span>
      <span className="font-semibold">{children || "Click Me"}</span>
      <span className="ml-2">{icon}</span>
    </button>
  );
}
export default Btn1; 