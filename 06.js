const protectEmail = (string) => {
  const emailExtension = string.slice(string.indexOf('@'))
  const anonName = string.slice(0, 4)

  return `${anonName}...${emailExtension}`
}

console.log(protectEmail('robin_singh@example.com'))
