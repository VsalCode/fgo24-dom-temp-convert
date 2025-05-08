const form = document.getElementById("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // console.log(e.target.temp.value);
        const data = e.target.temp.value
        // console.log(typeof data.temp);
        const temp = parseInt(data);

        if(temp < 0){
          alert('Maaf Tidak ada angka negatif pada kelvin!')
        }

        function calculateFahrenheit(x) {
          return (9 / 5) * x + 32;
        }

        function calculateKelvin(x) {
          return x + 273;
        }

        function calculateReamur(x) {
          return (4 / 5) * x;
        }

        const fahrenheit = document.querySelector('.container > div:last-child > p:nth-child(2) > span')
        const kelvin = document.querySelector('.container > div:last-child > p:nth-child(3) > span')
        const reamur = document.querySelector('.container > div:last-child > p:nth-child(4) > span')

        fahrenheit.textContent = calculateFahrenheit(temp)
        kelvin.textContent = calculateKelvin(temp)
        reamur.textContent = calculateReamur(temp)
      });