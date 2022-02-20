# API

## Create from data

- [ ] Access HTML elements
- [ ] Create HTML elements
- [ ] The Data - Create from Data folder
  - [ ] Animals - [animals](https://gist.github.com/Aliendroid8045/b09f9ac24273b6fd8e5184bdf1d3a62e)
  - [ ] More involved [countries](https://github.com/mledoze/countries)
- [ ] Add content to the created element
  - [ ] TextContent
  - [ ] AppendChild
- [ ] Add styling
  - [ ] setAttribute [attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

## Event listeners - clicking boxes

- [ ] Event listeners
  - [ ] Example with one event listener for multiple items
- [ ] event.target (also data attributes) [data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## setTimeout - setInterval - clicking boxes (activity 3)

- [ ] setTimeout
  - [ ] setTimeout(func, time);
- [ ] setInterval
  - [ ] var x = setInterval(func,time);
  - [ ] clearInterval(x)

## Data attributes - clicking boxes

- [ ] Data attributes
  - [ ] Set - element.setAttribute('data-<attribute name>', <value>)
  - [ ] Get - element.getAttribute('data-<attribute name>') or
        element.dataset.<attribute name>

## Local Storage - (activity 5)

- [ ] Local Storage

  - [ ] Try using [MDN page - Using Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
  - [ ] Only can save strings

        ```js
        localStorage.setItem('myCat', 'Tom');
        ```

  - [ ] Get the information back

        ```js
        const cat = localStorage.getItem('myCat');
        ```

  - [ ] JSON.stringify(<object to store>)
  - [ ] JSON.parse(<string to convert to object>)

## Maybe

- [ ] preventDefault
- [ ] trim
