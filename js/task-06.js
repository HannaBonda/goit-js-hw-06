
const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);

    inputEl.addEventListener('blur', onCheckInput);

    function onCheckInput () {
     let numberReal = inputEl.value.length;
       if (numberReal === Number(inputEl.dataset.length)) {
           inputEl.classList.add('valid');
           inputEl.classList.remove('invalid');
      } else {
         inputEl.classList.add('invalid');
         inputEl.classList.remove('valid');
        };
   };

   





















{/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    /> */}