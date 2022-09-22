import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database';

export async function createVoucher() {
  return { id: 1, code: "MANGA25OFF", discount: 25, used: false }
}