import '../output.css'

import { Town } from './Town.js'

export function Province ({ label, towns }) {
  return (/* html */`
    <details class="bg-gray-200 border border-gray-300 rounded p-4 mb-4">
      <summary class="font-bold">${label}</summary>
      ${towns.map(Town).join('')}
    </details>
  `)
}
