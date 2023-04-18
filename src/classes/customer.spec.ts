import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Anchieta', '111.111');
    expect(sut).toHaveProperty('firstName', 'Rodrigo');
    expect(sut).toHaveProperty('lastName', 'Anchieta');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Anchieta', '111.111');
    expect(sut.getName()).toBe('Rodrigo Anchieta');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Apple', '222');
    expect(sut).toHaveProperty('name', 'Apple');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Apple', '222');
    expect(sut.getName()).toBe('Apple');
    expect(sut.getIDN()).toBe('222');
  });
});
