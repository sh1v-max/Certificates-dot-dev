import { expect, describe, it } from 'vitest'
import { fetchProductDetails, fetchAllProducts } from '../src/main'


describe('Product API Functions', () => {
  describe('fetchAllProducts', () => {
    it('should fetch all products successfully', async () => {
      return await new Promise((resolve) => {
        Promise.all([
          fetchAllProducts(),
          fetch('https://dummyjson.com/products').then((res) => res.json())
        ]).
          then(([
            r1,
            r2
          ]) => {
            expect(r1).toStrictEqual(r2)
            resolve()
          })
      })
    })
  })
  describe('fetchProductDetails', () => {
    it('should work w/ 200', async () => {
      const productId = 1
      const result = await fetchProductDetails(productId)
      const expectedResult = await fetch(`https://dummyjson.com/products/${productId}`).then((res) => res.json())

      expect(result).toStrictEqual(expectedResult)
    })

    it('should work w/ 404', async () => {
      const nonExistentProductId = 9999
      const result = await fetchProductDetails(nonExistentProductId)

      expect(result).toHaveProperty('error')
      expect(result.error.status).toBe(404)
    })
  })
})
