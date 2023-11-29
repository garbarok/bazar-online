import { createContext } from 'react'
import { type Product } from '#types/product.ts'

export const ProductContext = createContext<Product | undefined>(undefined)
