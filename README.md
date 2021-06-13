## How to build

```javascript
npm run build
npm install -g serve
serve -s build

// And then you can see build result on  http://localhost:5000
```

## How to use

### You can use it directly

```javascript
  <DatePicker />
  <DatePickerInput />
```

### Use onSelect props to subscribe the date change

```javascript

  const handleSelect = (year, month, date) => {
      // do what you want to do when date change
  }

  <DatePicker onSelct={handleSelect} />
  <DatePickerInput onSelct={handleSelect} />
```

### Use onSelect props and date props to turn <DatePicker /> into controlled component

```javascript
const handleSelect = (year, month, date) => {
  // do what you want to do when date change
};

<DatePicker date={{ year, month, date }} onSelct={handleSelect} />;
```
