import { orderPizza } from '../lambda-fns/orderPizza';

test('Order Pizza No Pineapple', async () => {
    // WHEN
    const result = await orderPizza('pepperoni');
    
    // THEN
    expect(result.containsPineapple == false);
});

test('Order Pizza With Pineapple', async () => {
   // WHEN
   const result = await orderPizza('pineapple');
    
   // THEN
   expect(result.containsPineapple == true);
});

test('Order Pizza Hawaiian', async () => {
    // WHEN
    const result = await orderPizza('hawaiian');
     
    // THEN
    expect(result.containsPineapple == true);
 });

