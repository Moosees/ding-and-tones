export const parseOptions = (options) =>
  options.map((option, i) => {
    if (option.group)
      return (
        <optgroup label={option.group} key={i}>
          {parseOptions(option.options)}
        </optgroup>
      );
    else
      return (
        <option
          disabled={option.disabled}
          hidden={option.hidden}
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      );
  });
