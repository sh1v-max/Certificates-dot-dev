import { expect, describe, it } from 'vitest'
import { pokemonData } from '../public/data'

import {
  updatePokedex,
  filterByType,
  calculateTeamPower,
  findRarePokemon,
  evolveAllPokemon,
  readyForChampionship
} from '../src/main'

const _data = structuredClone(pokemonData)
describe('Pokemon functions tests', () => {
  it('updatePokedex should add discoveredAt property', () => {
    const result = updatePokedex(_data)
    expect(result[0]).toHaveProperty('discoveredAt')
    expect(typeof result[0].discoveredAt).toBe('number')
  })

  it('filterByType should correctly filter Pokemon by type', () => {
    const result = filterByType(_data, 'Ice')
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Articuno')
  })

  it('calculateTeamPower should correctly calculate total team power', () => {
    const result = calculateTeamPower(_data)
    expect(result).toBe(523)
  })

  it('findRarePokemon should find the legendary Pokemon', () => {
    const result = findRarePokemon(_data)
    expect(result.name).toBe('Mewtwo')
  })

  it('evolveAllPokemon should increase level and power of all Pokemon', () => {
    const copyArray = JSON.parse(JSON.stringify(_data))
    evolveAllPokemon(copyArray)
    copyArray.forEach((item, index) => {
      expect(item.level).toBe(_data[index].level + 1)
      expect(item.power).toBe(_data[index].power + 10)
    })
  })

  it('readyForChampionship should correctly determine if team is ready', () => {
    expect(readyForChampionship(_data)).toBe(false)
    const highLevelTeam = _data.map((p) => ({ ...p,
      'level': 50 }))
    expect(readyForChampionship(highLevelTeam)).toBe(true)
  })
})
