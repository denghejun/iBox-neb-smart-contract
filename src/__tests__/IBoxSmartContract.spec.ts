import IBoxSmartContractImpl from '../index'

it('[SafeBoxSmartContract : 01] create a new SafeBoxSmartContract instance should not be null', () => {
  // given
  const contract = new IBoxSmartContractImpl();

  // when
  // contract.init();

  // then
  expect(contract).not.toBe(null);
})
