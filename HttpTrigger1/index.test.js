const httpFunction= require('./index');
const context = require ('../testing/Context');

test('Http trigger example', async() => {
const request={
    query:{name:'oliver'}
    }

await httpFunction(context,request);
expect(context.res.body).toEqual('Welcome, oliver');
expect(context.log.mock.calls.length).toBe(1);
});