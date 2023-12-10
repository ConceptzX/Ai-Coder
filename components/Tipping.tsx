interface Props {
  Tipping: string;
  onChange: Tipping: string;
}

export const Tipping: React.FC<Props> = ({ Tipping, onChange }) => {
  return (
    <input
      className="mt-1 h-[24px] w-[60px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      type="number"
      placeholder="Tipping"
      value={Tipping}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

