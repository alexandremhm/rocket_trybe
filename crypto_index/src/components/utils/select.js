export const selectOptions = [
  { value: 'BRL', label: 'BRL - Real' },
  { value: 'CAD', label: 'CAD - Dólar canadense' },
  { value: 'EUR', label: 'EUR - Euro' },
];

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? '#fafafa' : '#000000',
    padding: 20,
    backgroundColor: state.isSelected ? '#6CC28D' : 'white',
  }),
};
