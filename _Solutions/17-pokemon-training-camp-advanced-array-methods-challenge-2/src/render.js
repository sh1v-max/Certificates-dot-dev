// You do not need to focus on and modify the content of this file

function createPokemonCard (pokemon) {
  return `
    <div class="pokemon-card">
        <h3>${pokemon.name}</h3>
        <p>Type: ${pokemon.type}</p>
        <p>Level: ${pokemon.level}</p>
        <p>Power: ${pokemon.power}</p>
        <p>Rarity: ${pokemon.rarity}</p>
        <p>DiscoveredAt: ${new Date(pokemon.discoveredAt).toLocaleString()}</p>
    </div>
  `
}

export function displayTeamOverview (pokemonData, teamPower, isReady) {
  document.getElementById('teamOverview').innerHTML = `
      <p><strong>Team Total Power:</strong> ${teamPower}</p>
      <p><strong>Championship Ready:</strong> ${isReady
    ? 'Ready!'
    : 'More training needed'}</p>
      <p><strong>Team Size:</strong> ${pokemonData.length}</p>
  `
}

export function displayPokedex (updatedPokedex) {
  const pokedexHtml = updatedPokedex.slice(0, 2).map(createPokemonCard).
    join('')
  document.getElementById('pokedex').innerHTML = pokedexHtml
}

export function displayChallengeResults (fireType, rarePokemon) {
  document.getElementById('challengeResults').innerHTML = `
      <div class="result-card">
          <h3>Type Filter Results (Fire)</h3>
          <pre>${JSON.stringify(fireType, null, 2)}</pre>
      </div>
      <div class="result-card">
          <h3>Rare Pokemon</h3>
          <pre>${JSON.stringify(rarePokemon, null, 2)}</pre>
      </div>
      <div class="result-card">
          <h3>Evolution Results</h3>
          <p>All Pokemon: Level +1, Power +10</p>
      </div>
  `
}
