import { createClient } from "next-sanity"

const projectId='bg59aris'
const dataset='production'
const apiVersion='2024-01-31'

export const client=createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
});
