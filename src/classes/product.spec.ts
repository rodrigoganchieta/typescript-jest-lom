import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('MacOS', 99.99);
    expect(sut).toHaveProperty('name', 'MacOS');
    expect(sut.price).toBeCloseTo(99.99);
  });
});
