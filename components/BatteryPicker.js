import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const BatteryPicker = ({ label, value, onValueChange, items }) => {
  return (
    <RNPickerSelect
      onValueChange={onValueChange}
      items={items}
      placeholder={{ label: `Select ${label}`, value: null }}
      style={{
        inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30, // to ensure the text is never behind the icon
        },
        inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 8,
          color: 'black',
          paddingRight: 30, // to ensure the text is never behind the icon
        },
      }}
      value={value}
    />
  );
};

export default BatteryPicker;
