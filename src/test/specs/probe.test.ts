import { RhoProcessor } from '../../main/processor';

describe.skip('Probe', () => {

    const processor = new RhoProcessor();
    const parser = processor.getParser('block');

    const text = `
Hello   {#hi.cl1.cl2}
World
`;

    it('works', () => {
        console.log(parser.parseString(text).render(processor));
    });

});
