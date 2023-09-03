const btn = document.querySelector('.btn');

const populate = async (value, currency) => {
  let myStr = '';
  url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_SPQ1hLc52rziASAeZlKm8ib32bLFk2tqNq6FP61c&base_currency=${currency}`;
  let resposne = await fetch(url);
  let finalResult = await resposne.json();
  console.log(finalResult);
  //   finalResult.data.map((data) => {
  //     return data;
  //   });
  for (let key of Object.keys(finalResult['data'])) {
    myStr += `
    <tr>
    <td>${
      key == 'AFN'
        ? 'Afghani'
        : key == 'USD'
        ? 'US Dollar'
        : key == 'PKR'
        ? 'Pakistani Kaldar'
        : key
    }</td>
    <td>${finalResult['data'][key]['code']}</td>
    <td>${finalResult['data'][key]['value'] * value}</td>
    </tr>
    `;
  }

  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = myStr;
};
btn.addEventListener('click', (e) => {
  console.log('button is clicked');
  e.preventDefault();
  const value = parseInt(document.querySelector('#quantity').value);
  const output = document.querySelector('.output');
  const currency = document.querySelector("select[name='currency']").value;
  console.log(value);
  console.log(currency);
  populate(value, currency);
  output.style.display = 'block';
});
