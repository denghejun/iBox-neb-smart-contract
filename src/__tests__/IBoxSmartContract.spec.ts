import { IBoxSmartContract } from '../../'

it('[SafeBoxSmartContract : 01] create a new SafeBoxSmartContract instance should not be null', () => {
  // given
  const contract = new IBoxSmartContract();

  // when
  // contract.init();

  // then
  expect(contract).not.toBe(null);
})
