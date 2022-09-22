import { jest } from "@jest/globals";
import voucherService from '../../src/services/voucherService';
import voucherRepository from "../../src/repositories/voucherRepository";
import VoucherCreateData from '../../src/services/voucherService';
import { createVoucher } from '../factory/voucherFactory'

describe('Create a voucher', () => {
  it('Create a new voucher', async () => {
    const voucher = await createVoucher();
    jest.spyOn(voucherRepository, "getVoucherByCode").mockResolvedValueOnce(null);
    jest.spyOn(voucherRepository, "createVoucher").mockResolvedValueOnce(voucher);

    await voucherService.createVoucher(voucher.code, voucher.discount);
    expect(voucherRepository.createVoucher).toBeCalledTimes(1);
  });

  it('Try to create a new voucher with same code', async () => {
    const voucher = await createVoucher();
    jest.spyOn(voucherRepository, "getVoucherByCode").mockResolvedValueOnce(voucher);

    expect(voucherService.createVoucher(voucher.code, voucher.discount)).rejects.toEqual({
      type: "conflict",
      message: "Voucher already exist."
    });
  });
});

describe('Apply voucher', () => {
  it('Apply voucher', async () => {
    const voucher = await createVoucher();
    jest.spyOn(voucherRepository, "getVoucherByCode").mockResolvedValueOnce(voucher);
    /* jest.spyOn(voucherService, "isAmountValidForDiscount").mockResolvedValueOnce(
      voucher.discount); */

    
  });
});