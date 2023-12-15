import { FC } from 'react';

interface Props {
  lang: Lang;
  onChange: (lang: string) => void;
}

export const LangSelect: FC<Props> = ({ lang, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={lang}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'Chinese', 		label: 'Chinese' },
  { value: 'English', 		label: 'English' },
  { value: 'French', 			label: 'French' },
  { value: 'German', 			label: 'German' },
  { value: 'Japanese', 		label: 'Japanese' },
  { value: 'Dutch', 			label: 'Dutch' },
  { value: 'Korean', 			label: 'Korean' },
  { value: 'Russian', 		label: 'Russian' },
  { value: 'Polish', 			label: 'Polish' },
  { value: 'Spanish', 		label: 'Español' },
];
