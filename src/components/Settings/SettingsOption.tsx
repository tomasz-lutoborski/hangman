import Select from "react-select/dist/declarations/src/Select";

interface SettingsOptionProps {
  title: string;
  name: string;
  options: string[] | number[];
}

export default function SettingsOption(props: SettingsOptionProps) {
  return (
    <div>
      <label>
        {props.title}
        <select name={props.name} defaultValue={props.options[0]}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
