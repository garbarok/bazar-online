import { test, expect } from '@playwright/test'

test('can visit the home page', async ({ page }) => {
	await page.goto('/')
	await expect(
		page.getByRole('heading', {
			name: /bazar online/i,
		}),
	).toBeVisible()
})

test('There is a Search button in home page', async ({ page }) => {
	await page.goto('/')
	await page.screenshot()
	await expect(
		page.getByRole('button', {
			name: /search/i,
		}),
	).toContainText('Search')
})

test('There is a Search input in home page', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('searchbox')).toBeVisible()
})
