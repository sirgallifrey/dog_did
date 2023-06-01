import { z } from 'zod';

export const PackMemberRole = z.enum(['owner', 'admin', 'member']);

export const PackMember = z.object({
    userId: z.string().uuid(),
    role: PackMemberRole,
});

/**
 * Pack Data
 */
export const PackSchema = z
	.object({
		id: z.number(),
		packName: z.string(),
        members: z.array(PackMember),
		// TODO: save entire pet here? or just pet id?
        pets: z.array(z.number()),
		createdAt: z.date(),
	})
	.describe('Pack data');

/**
 * New Pack being created
 */
export const NewPackSchema = z
	.object({
		packName: z.string(),
	})
	.describe('New Pack message');

/**
 * Subject data For editing.
 */
export const EditPackSchema = NewPackSchema.extend({}).describe(
	'Edit Pack message'
);

/**
 * Pack data as seen by other users.
 */
export const PublicPackSchema = z.object({
	id: z.string().uuid(),
	packName: z.string(),
}).describe('Pack data as seen by non member users');
