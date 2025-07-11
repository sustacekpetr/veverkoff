import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <div class="p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo mb-4" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla mb-6" alt="TypeScript logo" />
    </a>
    <h1 class="text-4xl font-bold text-blue-600 mb-4">🎉 Tailwind funguje! 🎉</h1>
    <div class="card">
      <button id="counter" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Klikni mě
      </button>
    </div>
    <p class="mt-4 text-gray-700">
      Pokud tohle vidíš stylované, máš Tailwind v <code>style.css</code> zapnutý.
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
