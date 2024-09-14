import { useState } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ILS");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = async () => {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    setResult(amount * rate);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">המרת מטבעות</h2>
      <div className="mb-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="סכום"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full"
        >
          <option value="USD">דולר (USD)</option>
          <option value="ILS">שקל (ILS)</option>
          <option value="VND">דונג וייטנאמי (VND)</option>
          <option value="EUR">אירו (EUR)</option>
        </select>
      </div>
      <div className="mb-2">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full"
        >
          <option value="USD">דולר (USD)</option>
          <option value="ILS">שקל (ILS)</option>
          <option value="VND">דונג וייטנאמי (VND)</option>
          <option value="EUR">אירו (EUR)</option>
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
      >
        המר
      </button>

      {result && <p className="mt-4">התוצאה: {result}</p>}
    </div>
  );
}
