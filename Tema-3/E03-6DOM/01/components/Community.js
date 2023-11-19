import '../output.css'

import { Province } from './Province.js'

export function Community ({ label, provinces }) {
  return (/* html */`
    <details>
      <summary>${label}</summary>
      ${provinces.map(Province).join('')}
    </details>
  `)
}
